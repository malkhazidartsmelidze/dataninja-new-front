import React from 'react';
import { Button } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AudienceService from 'services/AudienceService';
import useNotif from 'store/NotificationsContext';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudienceNameField from '../newcomponents/AudienceNameField';
import { RemarketingVisitedPagesField } from '../components/Google';
import GoogleRemarketingAudiencePrefillOptionField from '../newcomponents/GoogleRemarketingAudiencePrefillOptionField';
import GoogleRemarketingAudienceListMembersField from '../newcomponents/GoogleRemarketingAudienceListMembersField';
import GoogleRemarketingMembershipDurationField from '../newcomponents/GoogleRemarketingMembershipDurationField';
import GoogleRemarketingAudienceListRules from '../newcomponents/GoogleRemarketingAudienceListRules';

export default () => {
  const { notify } = useNotif();

  const submitButtonClicked = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    AudienceService.createGoogleRemarketingAudience(formData).then((res) => {
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
      <ExpansionPanel
        expanded
        title='List Members'
        subTitle="Select the type of visitors from which you'd like to create an audience"
      >
        <GoogleRemarketingAudienceListMembersField />
      </ExpansionPanel>
      <ExpansionPanel
        expanded
        title='Visited pages'
        subTitle='Include people that visited a page with the following rules'
      >
        <GoogleRemarketingAudienceListRules />
      </ExpansionPanel>
      <ExpansionPanel
        expanded
        title='Pre-fill options'
        subTitle='Choose between pre-filling the list or starting with an empty one'
      >
        <GoogleRemarketingAudiencePrefillOptionField />
      </ExpansionPanel>
      <ExpansionPanel
        expanded
        title='Membership duration'
        subTitle='Enter the number of days someone stays in this audience'
      >
        <GoogleRemarketingMembershipDurationField />
      </ExpansionPanel>

      <div style={{ marginTop: 16 }}>
        <Button type='submit' size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </form>
  );
};
