import React, { Fragment, useEffect, useState } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
import { mdiClose, mdiMinus, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import FacebookTargetingService from 'services/FacebookTargetingService';

export default () => {
  const classes = useStyles();
  const [facebookLocations, setFacebookLocations] = useState({
    included: {},
    excluded: {},
  });
  const [googleLocations, setGoogleLocations] = useState({});
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [googleSuggestions, setGoogleSuggestions] = useState([]);
  const [facebookCurrentLocationKey, setFacebookCurrentLocationKey] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length < 3) return;
      setLoading(true);
      FacebookTargetingService.searchLocations(searchTerm).then((data) => {
        console.log(data);
        if (!Array.isArray(data)) return;
        setLoading(false);
        setOptions(data);
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setGoogleSuggestions([]);
    setSearchTerm(e.target.value);
  };

  const isLocationTargetted = (key) => {
    return facebookLocations.included[key] !== undefined;
  };

  const isLocationExcluded = (key) => {
    return facebookLocations.excluded[key] !== undefined;
  };

  const targetLocation = (location) => {
    if (!location.key || isLocationTargetted(location.key)) return;
    addGoogleLocations(location);
    setFacebookLocations((o) => {
      o.included[location.key] = location;
      return { ...o };
    });
    if (isLocationExcluded(location.key)) {
      deleteFromExcluded(location.key);
    }
  };

  const excludeLocation = (location) => {
    if (!location.key || isLocationExcluded(location.key)) return;
    setFacebookLocations((o) => {
      o.excluded[location.key] = location;
      return { ...o };
    });
    addGoogleLocations(location);
    if (isLocationTargetted(location.key)) {
      deleteFromTargetted(location.key);
    }
  };

  const deleteFromExcluded = (key) => {
    setFacebookLocations((old) => {
      delete old.excluded[key];
      return { ...old };
    });
  };

  const deleteFromTargetted = (key) => {
    setFacebookLocations((old) => {
      delete old.included[key];
      return { ...old };
    });
  };

  const addGoogleLocations = (location) => {
    setGoogleSuggestions([]);
    if (googleLocations[location.key]) return;
    FacebookTargetingService.searchLocationInGoogle(location.name).then((data) => {
      setGoogleSuggestions(data);
      setFacebookCurrentLocationKey(location.key);
    });
  };

  const googleLocationChoosen = (e) => {
    setGoogleLocations({ ...googleLocations, [facebookCurrentLocationKey]: e.target.value });
    setGoogleSuggestions([]);
  };

  const renderIncludedLocations = () => {
    const locs = Object.values(facebookLocations.included);

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
              {locs.map((loc, k) => {
                return (
                  <li key={loc.key}>
                    <input
                      type='hidden'
                      name={`targetings[included_locations][${loc.type}][]`}
                      value={loc.key}
                    />
                    {googleLocations[loc.key] && (
                      <input
                        type='hidden'
                        name={`targetings[google_included_locations][]`}
                        value={googleLocations[loc.key]}
                      />
                    )}
                    <Chip
                      color={googleLocations[loc.key] ? 'primary' : 'secondary'}
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
    const locs = Object.values(facebookLocations.excluded);

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
              {locs.map((loc, k) => {
                return (
                  <li key={loc.key}>
                    <input
                      type='hidden'
                      name={`targetings[excluded_locations][${loc.type}][]`}
                      value={loc.key}
                    />
                    {googleLocations[loc.key] && (
                      <input
                        type='hidden'
                        name={`targetings[google_excluded_locations][]`}
                        value={googleLocations[loc.key]}
                      />
                    )}
                    <Chip
                      color={googleLocations[loc.key] ? 'primary' : 'secondary'}
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
      content={
        <div>
          <Grid container spacing={2} className={classes.chipsGrid}>
            <Grid item xs={6}>
              {renderIncludedLocations()}
            </Grid>
            <Grid item xs={6}>
              {renderExcludedLocations()}
            </Grid>
            <Grid item xs={googleSuggestions.length ? 6 : 12}>
              <TextField
                label='Enter Location'
                onChange={handleInputChange}
                value={searchTerm}
                fullWidth
                key='input'
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={() => {
                          setOptions([]);
                          setGoogleSuggestions([]);
                          setSearchTerm('');
                        }}
                      >
                        <Icon path={mdiClose} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {googleSuggestions.length > 0 && (
              <Grid item xs={6}>
                <SelectField
                  label='Choose In Google'
                  options={googleSuggestions.map((s) => {
                    return { name: `${s.name} - ${s.type}`, value: s.criteria_id };
                  })}
                  fullWidth
                  onChange={googleLocationChoosen}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Card className={classes.card} elevation={4}>
                {loading ? (
                  <CircularProgress size={30} />
                ) : (
                  <List>
                    {options.length === 0 && 'No Options Aviable'}
                    {options.map((option, k) => {
                      return (
                        <ListItem
                          classes={{
                            root: classes.listItemRoot,
                          }}
                          key={k}
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
            </Grid>
            <Grid item xs={12}>
              <RadiusInput />
            </Grid>
          </Grid>
        </div>
      }
    />
  );
};

const RadiusInput = () => {
  const [value, setValue] = useState(10);
  const [unit, setUnit] = useState('kilometer');
  const [max, setMax] = useState(100);
  const [showRadius, setShowRadius] = useState(0);

  const valueChange = (_, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (unit == 'mile') {
      setMax(62);
    } else {
      setMax(100);
    }
  }, [unit]);

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SelectField
            name='targetings[with_radius]'
            value={showRadius}
            label='Choose Unit'
            fullWidth
            options={[
              { name: 'Include Radius', value: '1' },
              { name: 'Not Include Radius', value: '0' },
            ]}
            onChange={(e) => setShowRadius(e.target.value)}
          />
        </Grid>
        {showRadius == '1' && (
          <Fragment>
            <Grid item xs={3}>
              <SelectField
                name='targetings[distance_unit]'
                value={unit}
                label='Choose Unit'
                fullWidth
                options={[
                  { name: 'Kilometer', value: 'kilometer' },
                  { name: 'Mile', value: 'mile' },
                ]}
                onChange={(e) => setUnit(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name='targetings[radius]'
                value={value}
                label='Radius'
                fullWidth
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment>{unit}</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant='body2'>Choose Radius</Typography>
              <Slider onChange={valueChange} defaultValue={20} max={max} />
            </Grid>
          </Fragment>
        )}
      </Grid>
    </Fragment>
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
