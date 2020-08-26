import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';

export default (props) => {
  const classes = useStyles();
  const { values, EmptyComponent, onDelete } = props;

  if (!Array.isArray(values) || values.length == 0) {
    if (EmptyComponent) {
      return <EmptyComponent />;
    }
    return null;
  }

  return (
    <div className={classes.chipsContainer}>
      <ul className={classes.chipsContainerUl}>
        {values.map((value, key) => {
          return (
            <li key={key}>
              <Chip
                color='primary'
                size='small'
                label={value}
                className={classes.chip}
                onDelete={() => onDelete && onDelete(key)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  chipsContainerUl: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    marginBottom: 8,
    padding: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
