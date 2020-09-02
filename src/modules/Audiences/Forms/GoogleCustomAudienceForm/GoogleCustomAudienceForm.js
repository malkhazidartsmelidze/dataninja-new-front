import React, { useState, Fragment } from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import {
  CustomAudienceKeywordsField,
  CustomAudienceUrlsField,
  CustomAudienceAppsField,
  CustomAudiencePlacesField,
} from 'modules/Audiences/Forms/components/Google';
import { Button } from '@material-ui/core';
import Audience from 'Models/Audience/Audience';

export default () => {
  const [state, setState] = useState({
    name: 'Example Google Name',
    description: 'Example Google Description',
    keywords: [],
    similar_websites: [],
    similar_apps: [],
    similar_places: [],
    network: 'google',
    type: 'custom',
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
      component: CustomAudienceKeywordsField,
      title: 'Choose Search Keywords',
      subTitle: 'Enter Affinity Audience Seatch Keywords',
      props: {
        name: 'keywords',
        value: state.keywords,
      },
    },
    {
      component: CustomAudienceUrlsField,
      title: 'people who browse websites similar to',
      subTitle: 'Enter website addresses (URLs) that your ideal customer might visit',
      props: {
        name: 'similar_websites',
        value: state.similar_websites,
      },
    },
    {
      component: CustomAudienceAppsField,
      title: 'people who use apps similar to',
      subTitle: 'Enter app that your ideal customer might use',
      props: {
        name: 'similar_websites',
        value: state.similar_websites,
      },
    },
    {
      component: CustomAudiencePlacesField,
      title: 'people who visited these places',
      subTitle: 'Enter the types of places where your ideal customer might spend time',
      props: {
        name: 'similar_places',
        value: state.similar_places,
      },
    },
  ];

  const submitButtonClicked = () => {
    const data = state;

    Audience.service.createGoogleCustomAudience(data).then((d) => console.log(d));
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
