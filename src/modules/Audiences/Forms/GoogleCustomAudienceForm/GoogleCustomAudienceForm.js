import React from 'react';
import { Button } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AudienceService from 'services/AudienceService';
import useNotif from 'store/NotificationsContext';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudienceNameField from '../newcomponents/AudienceNameField';
import GoogleCustomAudienceKeywordsField from '../newcomponents/GoogleCustomAudienceKeywordsField';
import GoogleCustomAudienceSimilarWebsitesField from '../newcomponents/GoogleCustomAudienceSimilarWebsitesField';

export default () => {
  const { notify } = useNotif();

  const submitButtonClicked = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    AudienceService.createGoogleCustomAudience(formData).then((res) => {
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
      <ExpansionPanel expanded title='Enter Search Keywords' subTitle='Enter Search Keywords'>
        <GoogleCustomAudienceKeywordsField />
      </ExpansionPanel>
      <ExpansionPanel expanded title='Similar Websites' subTitle='Enter Similar Websites'>
        <GoogleCustomAudienceSimilarWebsitesField />
      </ExpansionPanel>

      <div style={{ marginTop: 16 }}>
        <Button type='submit' size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </form>
  );
};
