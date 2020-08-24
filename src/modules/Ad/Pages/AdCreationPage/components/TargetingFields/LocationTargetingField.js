import React, { useEffect, useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import {
  TextField,
  MenuItem,
  makeStyles,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Card,
  List,
  CircularProgress,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdForm from 'common/objects/Ad/AdForm';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus } from '@mdi/js';
import { theme } from 'common/@mui';

export default () => {
  const classes = useStyles();
  const { getField, setField } = useNewAdContext();
  const locations = getField('targeting_locations');
  const [targetedLocations, setTargetedlocations] = useState({});
  const [excludedLocations, setExcludedLocations] = useState({});
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length < 3) return;
      setLoading(true);
      AdForm.service.searchLocation(searchTerm).then((data) => {
        console.log(data);
        if (!Array.isArray(data)) return;
        setLoading(false);
        setOptions(data);
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const isLocationTargetted = (key) => {
    return targetedLocations[key] !== undefined;
  };

  const isLocationExcluded = (key) => {
    return excludedLocations[key] !== undefined;
  };

  return (
    <PanelField
      title='Enter Location'
      content={[
        <div>
          <TextField
            label='Enter Location'
            onChange={handleInputChange}
            value={searchTerm}
            fullWidth
            key='input'
          />
          <Card className={classes.card} elevation={4}>
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <List>
                {options.length === 0 && 'No Options Aviable'}
                {options.map((option) => {
                  return (
                    <ListItem
                      classes={{
                        root: classes.listItemRoot,
                      }}
                      key={option.key}
                    >
                      <ListItemText
                        secondary={option.type}
                        primary={`${option.name},${option.region && option.region},${
                          option.country_code && option.country_code
                        }`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge='end'
                          aria-label='comments'
                          disabled={isLocationTargetted(option.key)}
                        >
                          <Icon path={mdiPlus} />
                        </IconButton>

                        <IconButton
                          edge='end'
                          aria-label='comments'
                          disabled={isLocationExcluded(option.key)}
                        >
                          <Icon path={mdiMinus} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Card>
        </div>,
      ]}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  listItemRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));
