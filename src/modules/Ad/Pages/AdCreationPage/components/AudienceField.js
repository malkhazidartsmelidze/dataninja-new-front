import React, { useState, Fragment } from 'react';
import { Button, Dialog, DialogContent, Grid } from '@material-ui/core';
import { CreateAudiencePage } from 'modules/Audiences/Pages';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const [audienceModalOpen, setAudienceModalOpen] = useState(false);

  const handleClose = () => {
    setAudienceModalOpen(false);
  };

  return (
    <PanelField
      content={
        <Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectField
                label='Choose Facebook Audience'
                options={[{ name: 'asf', value: 'asdfsd' }]}
                style={{ width: 200, marginRight: 16 }}
              />

              <SelectField
                label='Choose Google Audience'
                options={[{ name: 'asf', value: 'asdfsd' }]}
                style={{ width: 200 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button onClick={() => setAudienceModalOpen(true)} variant='contained'>
                Or Create New Audience
              </Button>
              <Dialog onClose={handleClose} open={audienceModalOpen}>
                <DialogContent style={{ padding: 8, boxShadow: 'none' }}>
                  <CreateAudiencePage />
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Fragment>
      }
    />
  );
};
