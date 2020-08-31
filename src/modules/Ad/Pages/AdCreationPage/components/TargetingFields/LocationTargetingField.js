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
  Avatar,
  Chip,
  Paper,
  Grid,
  Typography,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdForm from 'Models/Ad/AdForm';
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

  const targetLocation = (location) => {
    if (!location.key || isLocationTargetted(location.key)) return;
    setTargetedlocations({ ...targetedLocations, [location.key]: location });
    if (isLocationExcluded(location.key)) {
      deleteFromExcluded(location.key);
    }
  };

  const excludeLocation = (location) => {
    if (!location.key || isLocationExcluded(location.key)) return;
    setExcludedLocations({ ...excludedLocations, [location.key]: location });
    if (isLocationTargetted(location.key)) {
      deleteFromTargetted(location.key);
    }
  };

  const deleteFromExcluded = (key) => {
    setExcludedLocations((old) => {
      delete old[key];
      return { ...old };
    });
  };

  const deleteFromTargetted = (key) => {
    setTargetedlocations((old) => {
      delete old[key];
      return { ...old };
    });
  };

  const renderIncludedLocations = () => {
    const locs = Object.values(targetedLocations);

    return (
      <Card>
        <CardHeader
          className={classes.chipsCardHeader}
          title='Targetted Locations'
          titleTypographyProps={{ variant: 'body2' }}
        />
        <CardContent className={classes.chipsCardContent}>
          {!locs.length ? (
            'Not any Targetted location'
          ) : (
            <ul className={classes.chipsContainerUl}>
              {locs.map((loc) => {
                return (
                  <li key={loc.key}>
                    <Chip
                      color='primary'
                      size='small'
                      label={`${loc.name} (${loc.type})`}
                      className={classes.chip}
                      onDelete={() => deleteFromTargetted(loc.key)}
                      avatar={<Avatar>{loc.country_code}</Avatar>}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderExcludedLocations = () => {
    const locs = Object.values(excludedLocations);

    return (
      <Card>
        <CardHeader
          className={classes.chipsCardHeader}
          title='Excluded Locations'
          titleTypographyProps={{ variant: 'body2' }}
        />
        <CardContent className={classes.chipsCardContent}>
          {!locs.length ? (
            'Not any excluded location'
          ) : (
            <ul className={classes.chipsContainerUl}>
              {locs.map((loc) => {
                return (
                  <li key={loc.key}>
                    <Chip
                      color='primary'
                      label={`${loc.name} (${loc.type})`}
                      size='small'
                      className={classes.chip}
                      onDelete={() => deleteFromExcluded(loc.key)}
                      avatar={<Avatar>{loc.country_code}</Avatar>}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <PanelField
      title='Enter Location'
      content={[
        <div>
          <Grid container spacing={2} className={classes.chipsGrid}>
            <Grid item xs={6}>
              {renderIncludedLocations()}
            </Grid>
            <Grid item xs={6}>
              {renderExcludedLocations()}
            </Grid>
          </Grid>
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
                        primary={`${option.name},${option.region ? `${option.region},` : ''}${
                          option.country_code && option.country_code
                        }`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge='end'
                          aria-label='comments'
                          disabled={isLocationTargetted(option.key)}
                          onClick={() => targetLocation(option)}
                        >
                          <Icon path={mdiPlus} />
                        </IconButton>

                        <IconButton
                          edge='end'
                          aria-label='comments'
                          disabled={isLocationExcluded(option.key)}
                          onClick={() => excludeLocation(option)}
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
  chipsContainerUl: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chipsCardContent: {
    padding: theme.spacing(0.5),
  },
  chipsCardHeader: {
    padding: theme.spacing(0.5),
  },
  chipsGrid: {
    marginBottom: theme.spacing(3),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
