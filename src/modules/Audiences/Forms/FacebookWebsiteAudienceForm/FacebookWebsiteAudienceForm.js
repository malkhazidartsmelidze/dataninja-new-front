import React, { useState, Fragment } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import {
  RefineByFrequency,
  RefineByDevice,
  AudienceCriterionType,
  PeopleAudienceOptions,
} from 'modules/Audiences/Forms/components/Facebook';
import Audience from 'Models/Audience/Audience';
import { Button } from '@material-ui/core';

export default () => {
  const [state, setState] = useState({
    name: 'Example Audience Name',
    description: 'Example Audience Description',
    criterion_type: 'all',
    visitor_type: 'all_visitors',
    time_percent: 25,
    period: 30,
    frequency_condition: 'greater_or_equal',
    frequency_value: 2,
    devices: 'all',
    exclusions: [],
    inclusions: {
      rules: [
        {
          urlType: 'url',
          condition: 'equals',
          values: ['http://facebook.com', 'http://google.com'],
        },
        { urlType: 'url', condition: 'contains', values: ['http://google.com'] },
      ],
    },
    network: 'facebook',
    type: 'website',
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
        value: state.value,
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
      component: AudienceCriterionType,
      title: 'Criterion Type',
      subTitle: 'Include people who meet following criterions ',
      props: {
        name: 'criterion_type',
        value: state.criterion_type,
      },
    },
    {
      component: PeopleAudienceOptions,
      title: 'Include People',
      subTitle: 'Include People Based on following conditions: ',
      props: {
        name: 'inclusions',
        value: state.inclusions,
      },
    },
    {
      component: PeopleAudienceOptions,
      title: 'Exclude People',
      subTitle: 'Exclude People Based on following conditions: ',
      props: {
        name: 'criterion_type',
        value: state.criterion_type,
      },
    },
    {
      component: RefineByFrequency,
      title: 'Frequency Refine',
      subTitle: 'Refine Audience By Frequency: ',
      props: {
        frequencyConditionName: 'frequency_condition',
        frequencyCondition: state.frequency_condition,
        frequencyValueName: 'frequency_value',
        frequencyValue: state.frequency_value,
      },
    },
    {
      component: RefineByDevice,
      title: 'Frequency Devices',
      subTitle: 'Refine Audience By Device: ',
      props: {
        name: 'devices',
        value: state.value,
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
