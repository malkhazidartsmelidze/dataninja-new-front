import React, { Fragment, useState } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import {
  AudienceVideoEngagmentType,
  AudienceVideoDaysField,
} from 'modules/Audiences/Forms/components/Facebook';
import { Button } from '@material-ui/core';
import Audience from 'common/objects/Audience';

export default () => {
  const [state, setState] = useState({
    name: 'Example Audience Name',
    description: 'Example Audience Description',
    engagment_type: 'video_watched',
    days: 365,
    network: 'facebook',
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
      component: AudienceVideoEngagmentType,
      title: 'Engagement Type',
      subTitle: 'Choose the type of content that you want to use to create your audience',
      props: {
        name: 'engagment_type',
        value: state.engagment_type,
      },
    },
    {
      component: AudienceVideoDaysField,
      title: 'In the past',
      subTitle: 'Choose Days Here',
      props: {
        name: 'days',
        value: state.days,
      },
    },
  ];

  const submitButtonClicked = () => {
    const data = state;

    Audience.service.create(data).then((d) => console.log(d));
  };

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
