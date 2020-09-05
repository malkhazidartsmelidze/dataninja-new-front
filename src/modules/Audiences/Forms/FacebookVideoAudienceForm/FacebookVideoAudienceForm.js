import React, { Fragment, useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceVideoDaysField } from 'modules/Audiences/Forms/components/Facebook';
import { Button } from '@material-ui/core';
import { FacebookVideoAudience } from 'Models/Audience';
import AudienceNameField from '../newcomponents/AudienceNameField';
import AudienceDescriptionField from '../newcomponents/AudienceDescriptionField';
import AudienceVideoEngagmentType from '../newcomponents/AudienceVideoEngagmentType';
import AudienceVideoField from '../newcomponents/AudienceVideoField';
import AudienceRetentionDaysField from '../newcomponents/AudienceRetentionDaysField';
import AudiencePixelField from '../newcomponents/AudiencePixelField';

export default () => {
  const [state, setState] = useState({
    name: 'Example Audience Name',
    description: 'Example Audience Description',
    engagment_type: 'video_watched',
    retention_days: 365,
    video_ids: [],
    pixel_id: '',
    type: 'video',
  });

  const onFieldChange = (field, value) => {
    setState({ ...state, [field]: value });
  };

  console.log(state);

  // const steps = [
  //   {
  //     component: AudienceDescriptionField,
  //     title: 'Audience Description',
  //     subTitle: 'Enter Audience Description',
  //     props: {
  //       name: 'description',
  //       value: state.description,
  //     },
  //   },
  //   {
  //     component: AudienceVideoField,
  //     title: 'Choose Video',
  //     subTitle: 'Choose Video',
  //     props: {
  //       name: 'video_ids',
  //       value: state.video_ids,
  //     },
  //   },
  //   {
  //     component: AudienceVideoEngagmentType,
  //     title: 'Engagement Type',
  //     subTitle: 'Choose the type of content that you want to use to create your audience',
  //     props: {
  //       name: 'engagment_type',
  //       value: state.engagment_type,
  //     },
  //   },
  //   {
  //     component: AudienceVideoDaysField,
  //     title: 'In the past',
  //     subTitle: 'Choose Days Here',
  //     props: {
  //       name: 'retention_days',
  //       value: state.retention_days,
  //     },
  //   },
  // ];

  const submitButtonClicked = () => {
    const data = state;

    FacebookVideoAudience.service.create(data).then((d) => console.log(d));
  };

  return (
    <Fragment>
      <ExpansionPanel title='Audience Name' subTitle='Enter Audience Name'>
        <AudienceNameField name='name' />
      </ExpansionPanel>
      <ExpansionPanel title='Audience Description' subTitle='Enter Audience Descriptin'>
        <AudienceDescriptionField name='description' />
      </ExpansionPanel>
      <ExpansionPanel title='Choose Pixel' subTitle='Choose Pixel Id'>
        <AudiencePixelField name='pixel_id' />
      </ExpansionPanel>
      <ExpansionPanel title='Video Engagment Type' subTitle='Enter Video Engagment Type'>
        <AudienceVideoEngagmentType name='engagment_type' />
      </ExpansionPanel>
      <ExpansionPanel title='Choose Video' subTitle='Choose Video'>
        <AudienceVideoField name='video_ids' />
      </ExpansionPanel>
      <ExpansionPanel title='Retention Days' subTitle='Choose Retention Days'>
        <AudienceRetentionDaysField name='retention_days' defaultValue='365' />
      </ExpansionPanel>
      <div style={{ marginTop: 16 }}>
        <Button onClick={submitButtonClicked} size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </Fragment>
  );
};
