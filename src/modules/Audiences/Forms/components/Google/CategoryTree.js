import React, { Fragment, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, AppBar, Tabs, Tab, Box, Typography, Grid, Checkbox } from '@material-ui/core';
import { useEffect } from 'react';
import Audience from 'Models/Audience/Audience';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { mdiArrowLeft, mdiArrowRight, mdiArrowTopLeft } from '@mdi/js';
import Icon from '@mdi/react';
import AudienceService from 'services/AudienceService';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Affinity Categories' {...a11yProps(0)} />
          <Tab label='In Market Categories' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Grid container>
        <Grid item xs={6}>
          <TabPanel value={value} index={0}>
            <AffinityTree />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <InMarketTree />
          </TabPanel>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Fragment>
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

const AffinityTree = () => {
  const [tree, setTree] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  useEffect(() => {
    AudienceService.browseAffinityTree().then((data) => {
      if (!Array.isArray(data)) return;
      setTree(data);
    });
  }, []);

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      return (
        <TreeItem
          key={node.id}
          nodeId={node.id}
          label={
            <div>
              <Checkbox onChange={onCheckChange} value={node.id} />
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

  return (
    <TreeView
      style={{ width: 500 }}
      defaultCollapseIcon={<Icon path={mdiArrowTopLeft} />}
      defaultExpanded={['root']}
      selected={selected}
      defaultExpandIcon={<Icon path={mdiArrowRight} />}
    >
      {renderTree(tree)}
    </TreeView>
  );
};

const InMarketTree = () => {
  const [tree, setTree] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  useEffect(() => {
    AudienceService.browseInMarketTree().then((data) => {
      if (!Array.isArray(data)) return;
      setTree(data);
    });
  }, []);

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      return (
        <TreeItem
          key={node.id}
          nodeId={node.id}
          label={
            <div>
              <Checkbox onChange={onCheckChange} value={node.id} />
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

  return (
    <TreeView
      style={{ width: 500 }}
      defaultCollapseIcon={<Icon path={mdiArrowTopLeft} />}
      defaultExpanded={['root']}
      selected={selected}
      defaultExpandIcon={<Icon path={mdiArrowRight} />}
    >
      {renderTree(tree)}
    </TreeView>
  );
};
