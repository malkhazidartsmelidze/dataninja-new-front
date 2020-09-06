import React, { Fragment, useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { Button } from '@material-ui/core';
import AudienceNameField from '../newcomponents/AudienceNameField';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudiencePixelField from '../newcomponents/AudiencePixelField';
import WebsiteAudienceCriterionType from '../newcomponents/WebsiteAudienceCriterionType';
import WebsiteAudiencePeopleOptions from '../newcomponents/WebsiteAudiencePeopleOptions';
import AudienceService from 'services/AudienceService';
import useNotif from 'store/NotificationsContext';

export default () => {
  const { notify } = useNotif();

  const submitButtonClicked = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    AudienceService.createFacebookWebsiteAudience(formData).then((res) => {
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

      <div style={{ marginTop: 16 }}>
        <Button type='submit' size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </form>
  );
};
