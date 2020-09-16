import React, { Fragment, useState } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Grid,
  Checkbox,
  TextField,
  InputAdornment,
  LinearProgress,
  Badge,
} from '@material-ui/core';
import { useEffect } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { mdiArrowRight, mdiArrowTopLeft, mdiMapSearch, mdiSearchWeb, mdiTextSearch } from '@mdi/js';
import Icon from '@mdi/react';
import AudienceService from 'services/AudienceService';
import PanelField from 'components/ExpansionPanel/PanelField';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default () => {
  const [value, setValue] = React.useState(0);
  const [affinityTree, setAffinityTree] = useState([]);
  const [inMarketTree, setInMarketTree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    AudienceService.browseInMarketTree().then((data) => {
      if (!Array.isArray(data)) return;
      setInMarketTree(data);
    });
    AudienceService.browseAffinityTree().then((data) => {
      if (!Array.isArray(data)) return;
      setAffinityTree(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search'
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon path={mdiMapSearch} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AppBar position='static'>
              <Tabs value={value} onChange={handleChange}>
                <Tab label='Affinity Category' {...a11yProps(0)} />

                <Tab label='In Market Category' {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <BrowseTree tree={affinityTree} loading={loading} search={query} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BrowseTree tree={inMarketTree} loading={loading} search={query} />
            </TabPanel>
          </Grid>
        </Grid>
      }
    />
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
};

const BrowseTree = ({ tree, loading, search }) => {
  const [checkeds, setCheckeds] = useState([]);

  const nodeContainsSearch = (node) => {
    const nodeContains = node.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    if (nodeContains) {
      return true;
    }

    if (!nodeContains && !Array.isArray(node.children)) return false;

    let contains = false;

    for (let i = 0, l = node.children.length; i < l; i++) {
      if (nodeContainsSearch(node.children[i])) {
        contains = true;
        break;
      }
    }

    return contains;
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      if (search && !nodeContainsSearch(node)) return null;

      return (
        <TreeItem
          key={node.id}
          nodeId={node.id}
          label={
            <div>
              <Checkbox onChange={onCheckChange} value={node.criterion_id} />
              {node.name}
            </div>
          }
        >
          {Array.isArray(node.children) ? renderTree(node.children) : null}
        </TreeItem>
      );
    });
  };

  const onCheckChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setCheckeds((old) => {
      if (checked) old.push(value);
      else old.splice(old.indexOf(value), 1);

      console.log(old);
      return [...old];
    });
  };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Fragment>
      {checkeds.map((id) => {
        return <input type='hidden' name='targetings[google_affinity_categories][]' value={id} />;
      })}
      <TreeView
        style={{ width: 500 }}
        defaultCollapseIcon={<Icon path={mdiArrowTopLeft} />}
        defaultExpanded={['root']}
        // selected={selected}
        defaultExpandIcon={<Icon path={mdiArrowRight} />}
      >
        {renderTree(tree)}
      </TreeView>
    </Fragment>
  );
};
