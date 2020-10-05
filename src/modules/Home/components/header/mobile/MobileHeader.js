import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { InputBase } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import HomePageService from 'services/HomePageService';
import clsx from 'clsx';

const useStyles = makeStyles({
  //modal style
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '10000 !important',
  },
  paper: {
    backgroundColor: '#f9f5ef',
    height: 667,
    width: 375,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 122,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  liquid: {
    position: 'relative',
    bottom: 32,
  },
  main_txt: {
    width: 184,
    height: 46,
    fontSize: 20,
    fontWeight: 900,
    color: '#ffffff',
  },
  second_txt: {
    width: 322,
    height: 76,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'FiraGO',
    marginTop: 5,
    lineHeight: 1.86,
  },
  section: {
    background: '#00897b',
    height: '100%',
    position: 'relative',
    bottom: 38,
    textAlign: 'center',
    paddingTop: 50,
  },
  inputStyle_first: {
    width: 300,
    height: 48,
    boxSizing: 'border-box',
    borderRadius: '24px',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
  },
  inputStyles_second: {
    width: 300,
    height: 48,
    boxSizing: 'border-box',
    borderRadius: '24px',
    background: '#007165',
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    fontWeight: 900,
    fontSize: 12,
    textTransform: 'none',
  },
  contact_txt: {
    color: '#ffffff',
    fontWeight: 900,
    fontSize: 14,
  },
  img: {
    paddingLeft: 40,
    paddingRight: 10,
  },
  inputStyle: {
    fontSize: 14,
    fontWeight: 800,
    color: '#818181',
    fontFamily: 'FiraGO',
  },
  CloseIcon: {
    width: 48,
    height: 48,
    borderRdius: 24,
    background: '#ff4e00',
    color: '#ffffff',
    float: 'right',
  },
  button: {
    textTransform: 'none',
    fontFamily: 'FiraGO',
    borderRadius: '24px',
    backgroundColor: '#2c7df0',
    color: '#ffffff',
    fontSize: '14px',
    padding: '8px 24px',
    fontWeight: 'bold',
    '&:hover': {
      background: '#2c7df0',
    },
  },
  savedButton: {
    color: 'white !important',
    background: 'green',
    '& *': {
      color: 'white !important',
    },
  },
});

function MobileHeader() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);

  const saveEmail = () => {
    if (email.length <= 10) return;
    HomePageService.saveEmail(email).then((e) => {
      setEmail('');
      setSaved(true);
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Try Beta for Free
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{}}
        close
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid item xs={12} className={classes.header}>
              <Grid item xs={4} className={classes.logo_grid}>
                <img alt='ninja' src='/images/home/dataninja.svg' />
              </Grid>
              <Grid item xs={5} className={classes.close}>
                <IconButton className={classes.CloseIcon} onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid className={classes.liquid}>
              <img alt='ninja' src='/images/home/liquid.png' />
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <Grid className={classes.flex}>
                <Typography className={classes.main_txt}>Do you want to Join Dataninja?</Typography>
              </Grid>
              <Grid className={classes.flex}>
                <Typography className={classes.second_txt}>
                  Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
                  Simple CRM, eal-Time Reporting system.
                </Typography>
              </Grid>
              <Grid className={classes.flex}>
                <Grid className={classes.inputStyle_first}>
                  <img className={classes.img} alt='mail' src='/images/home/mail.svg' />
                  <InputBase
                    disabled={saved}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={classes.inputStyle}
                    label='test'
                    placeholder='Your mail'
                  />
                </Grid>
              </Grid>
              <Grid className={classes.flex}>
                <Button className={clsx(classes.inputStyles_second, saved && classes.savedButton)}>
                  <Button className={classes.contact_txt} onClick={saveEmail} disabled={saved}>
                    {saved ? 'Your Email Successfully Saved' : 'Contact Me'}
                  </Button>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default MobileHeader;
