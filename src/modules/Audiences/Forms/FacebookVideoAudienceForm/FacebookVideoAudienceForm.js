import React, { Fragment, useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import {
  AudienceVideoEngagmentType,
  AudienceVideoDaysField,
  AudienceVideoField,
} from 'modules/Audiences/Forms/components/Facebook';
import { Button } from '@material-ui/core';
import Audience from 'common/objects/Audience';
import { FacebookAudience } from 'modules/Audiences/Objects';

export default () => {
  const [state, setState] = useState({
    name: 'Example Audience Name',
    description: 'Example Audience Description',
    video_engagment_type: 'video_watched',
    retention_days: 365,
    network: 'facebook',
    video_ids: [],
    type: 'video',
  });

  const onFieldChange = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const steps = [
    {
      component: AudienceNameField,
      title: 'Audience Name',
      subTitle: 'Enter Audience Name',
      props: {
        name: 'name',
        value: state.name,
      },
    },
    {
      component: AudienceDescriptionField,
      title: 'Audience Description',
      subTitle: 'Enter Audience Description',
      props: {
        name: 'description',
        value: state.description,
      },
    },
    {
      component: AudienceVideoField,
      title: 'Choose Video',
      subTitle: 'Choose Video',
      props: {
        name: 'video_ids',
        value: state.video_ids,
      },
    },
    {
      component: AudienceVideoEngagmentType,
      title: 'Engagement Type',
      subTitle: 'Choose the type of content that you want to use to create your audience',
      props: {
        name: 'video_engagment_type',
        value: state.video_engagment_type,
      },
    },
    {
      component: AudienceVideoDaysField,
      title: 'In the past',
      subTitle: 'Choose Days Here',
      props: {
        name: 'retention_days',
        value: state.retention_days,
      },
    },
  ];

  const submitButtonClicked = () => {
    const data = state;

    FacebookAudience.service.create(data).then((d) => console.log(d));
  };

  console.log(state);

  return (
    <Fragment>
      {steps.map((step) => (
        <ExpansionPanel
          key={step.title}
          title={step.title}
          subTitle={step.subTitle}
          titleWhenOpen={step.titleWhenOpen}
          subTitleWhenOpen={step.subTitleWhenOpen}
          titleBefore={step.titleBefore}
          subTitleBefore={step.subTitleBefore}
        >
          <step.component {...step.props} onChange={onFieldChange} />
        </ExpansionPanel>
      ))}
      <div style={{ marginTop: 16 }}>
        <Button onClick={submitButtonClicked} size='large' color='primary' variant='contained'>
          Create
        </Button>
      </div>
    </Fragment>
  );
};
