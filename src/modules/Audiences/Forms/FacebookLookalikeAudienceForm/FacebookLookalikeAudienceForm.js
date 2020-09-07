import React, { useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { Button } from '@material-ui/core';
import AudienceNameField from '../newcomponents/AudienceNameField';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudienceService from 'services/AudienceService';
import useNotif from 'store/NotificationsContext';
import LookalikeAudienceSize from '../newcomponents/LookalikeAudienceSize';
import LookalikeAudienceLocation from '../newcomponents/LookalikeAudienceLocation';
import LookalikeAudienceSource from '../newcomponents/LookalikeAudienceSource';

export default () => {
  const { notify } = useNotif();

  const submitButtonClicked = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    AudienceService.createFacebookLookalikeAudience(formData).then((res) => {
      notify('Audience Successfully Created');
    });
  };

  return (
    <form onSubmit={submitButtonClicked}>
      <ExpansionPanel title='Audience Name' subTitle='Enter Audience Name'>
        <AudienceNameField name='name' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Description' subTitle='Enter Audience Descriptin'>
        <AudienceDescriptionField name='description' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Source' subTitle='Select Audience Source'>
        <LookalikeAudienceSource name='source' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Location' expand subTitle='Select Audience Location'>
        <LookalikeAudienceLocation name='location' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Size' subTitle='Select Audience Size'>
        <LookalikeAudienceSize name='size' />
      </ExpansionPanel>

      <div style={{ marginTop: 16 }}>
        <Button type='submit' size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </form>
  );
};
