import React from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreativeNameField from './components/CreativeNameField';
import FacebookPageField from './components/FacebookPageField';
import CreativeFacebookImageField from './components/CreativeFacebookImageField';
import CreativeHeadlinesField from './components/CreativeHeadlinesField';
import CreativeLongHeadlineField from './components/CreativeLongHeadlineField';
import CreativeDisplayLinkField from './components/CreativeDisplayLinkField';
import CreativePrimaryTextField from './components/CreativePrimaryTextField';
import CreativeUrlField from './components/CreativeUrlField';
import CreativePixelField from './components/CreativePixelField';
import CreativeGmailFields from './components/CreativeGmailFields';
import CallToActionsField from './components/CallToActionsField';
import CreativeDescriptionFields from './components/CreativeDescriptionFields';
import CreativeBusinessNameField from './components/CreativeBusinessNameField';
import CreativeParametersField from './components/CreativeParametersField';

export default (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ExpansionPanel expanded title='Creative Name' subTitle='Enter Creative Name'>
          <CreativeNameField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Creative Link' subTitle='Enter Creative Link Here'>
          <CreativeUrlField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Choose Pixel' subTitle='Choose Facebook pixel Here'>
          <CreativePixelField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Choose Facebook Page' subTitle='Choose Facebook Page'>
          <FacebookPageField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Choose Facebook Image' subTitle='Choose Facebook Image'>
          <CreativeFacebookImageField />
        </ExpansionPanel>
        <ExpansionPanel
          expanded
          title='Choose Facebook Headlines'
          subTitle='Choose Facebook Headlines'
        >
          <CreativeHeadlinesField />
        </ExpansionPanel>
        <ExpansionPanel
          expanded
          title='Choose Facebook Descriptions'
          subTitle='Choose Facebook Descriptions'
        >
          <CreativeDescriptionFields />
        </ExpansionPanel>
        <ExpansionPanel
          expanded
          title='Choose Facebook Description'
          subTitle='Choose Facebook Description'
        >
          <CreativeLongHeadlineField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Primary Text' subTitle='Choose Facebook Primary Text'>
          <CreativePrimaryTextField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Business Name' subTitle='Choose Google Business Name'>
          <CreativeBusinessNameField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Enter Parameters' subTitle='Choose Ad Parameters'>
          <CreativeParametersField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Display Link' subTitle='Choose Facebook Display Link'>
          <CreativeDisplayLinkField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Call To Actions' subTitle='Choose Call To Action'>
          <CallToActionsField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Gmail Fields' subTitle='Enter Gmail Ad Fields'>
          <CreativeGmailFields />
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};
