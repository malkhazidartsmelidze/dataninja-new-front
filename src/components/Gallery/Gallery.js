import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core';
import { mdiVideo, mdiImage, mdiTab, mdiPlus, mdiLink, mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridTile: {
    position: 'relative',
    cursor: 'pointer',
    transition: '0.1s all ease-in-out',
  },
  linkButton: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  selectedCheckbox: {
    position: 'absolute',
    left: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  thumbnail: {
    objectFit: 'none',
  },
  thumbnailSelected: {
    transform: 'scale(0.9)',
  },
}));

export default function Gallery({ open, handleClose, data, multiple, onChoose }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(multiple ? [] : '');

  const selectToggle = (id) => {
    setSelected((old) => {
      if (multiple) {
        if (old.indexOf(id) > -1) {
          old.splice(old.indexOf(id), 1);
        } else {
          old.push(id);
        }
        return [...old];
      } else {
        return id;
      }
    });
  };

  const isSelected = (id) => {
    if (multiple) {
      return selected.indexOf(id) > -1;
    } else {
      return selected === id;
    }
  };

  const handleChoose = () => {
    onChoose && onChoose(selected);
  };

  return (
    <Dialog maxWidth='lg' fullWidth onClose={handleClose} open={open}>
      <DialogTitle onClose={handleClose}>Gallery</DialogTitle>
      <DialogContent dividers>
        <div className={classes.root}>
          <GridList cols={4} cellHeight={180} className={classes.gridList}>
            {data.map((tile) => {
              const sel = isSelected(tile.id);
              return (
                <GridListTile
                  key={tile.id}
                  className={clsx(classes.gridTile, sel && classes.thumbnailSelected)}
                  onClick={() => selectToggle(tile.id)}
                >
                  <img src={tile.thumbnail} alt={tile.title} className={classes.thumbnail} />
                  <IconButton
                    color='primary'
                    className={classes.icon}
                    className={classes.linkButton}
                  >
                    <Icon path={mdiLink} />
                  </IconButton>
                  {sel && (
                    <IconButton className={classes.icon} className={classes.selectedCheckbox}>
                      <Icon path={mdiCheck} />
                    </IconButton>
                  )}
                  <GridListTileBar
                    title={tile.title}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <Icon path={tile.type == 'video' ? mdiVideo : mdiImage} />
                      </IconButton>
                    }
                    subtitle={tile.subTitle}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleChoose} color='primary'>
          Choose
        </Button>
      </DialogActions>
    </Dialog>
  );
}
