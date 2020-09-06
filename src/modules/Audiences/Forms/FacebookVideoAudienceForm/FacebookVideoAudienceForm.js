import React, { Fragment, useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { Button } from '@material-ui/core';
import AudienceNameField from '../newcomponents/AudienceNameField';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudienceVideoEngagmentType from '../newcomponents/AudienceVideoEngagmentType';
import AudienceVideoField from '../newcomponents/AudienceVideoField';
import AudienceRetentionDaysField from '../newcomponents/AudienceRetentionDaysField';
import AudiencePixelField from '../newcomponents/AudiencePixelField';
import AudiencePageId from '../newcomponents/AudiencePageId';
import AudienceService from 'services/AudienceService';

export default () => {
  const [pageId, setPageId] = useState(null);

  const submitButtonClicked = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    AudienceService.createFacebookVideoAudience(formData).then((res) => {
      console.log(res);
    });
  };

  const facebookPageChanged = (e) => {
    setPageId(e.target.value);
  };

  return (
    <form onSubmit={submitButtonClicked}>
      <ExpansionPanel title='Audience Name' subTitle='Enter Audience Name'>
        <AudienceNameField name='name' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Description' subTitle='Enter Audience Descriptin'>
        <AudienceDescriptionField name='description' />
      </ExpansionPanel>
      <ExpansionPanel title='Choose Pixel' subTitle='Choose Pixel Id'>
        <AudiencePixelField name='pixel_id' />
      </ExpansionPanel>
      <ExpansionPanel title='Choose Page' subTitle='Choose Facebook Page'>
        <AudiencePageId name='page_id' onChange={facebookPageChanged} />
      </ExpansionPanel>
      <ExpansionPanel title='Video Engagment Type' subTitle='Enter Video Engagment Type'>
        <AudienceVideoEngagmentType name='engagment_type' />
      </ExpansionPanel>
      <ExpansionPanel title='Choose Video' subTitle='Choose Video'>
        <AudienceVideoField name='video_ids' pageId={pageId} />
      </ExpansionPanel>
      <ExpansionPanel title='Retention Days' subTitle='Choose Retention Days'>
        <AudienceRetentionDaysField name='retention_days' defaultValue='365' />
      </ExpansionPanel>
      <div style={{ marginTop: 16 }}>
        <Button type='submit' size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </form>
  );
};
