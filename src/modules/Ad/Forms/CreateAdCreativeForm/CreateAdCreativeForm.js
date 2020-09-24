import React from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreativeNameField from './components/CreativeNameField';
import FacebookPageField from './components/FacebookPageField';
import CreativeImageField from './components/CreativeImageField';
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
import CreativeVideoField from './components/CreativeVideoField';
import useCreateAd from 'modules/Ad/store/CreateAdContext';
import CreativeResponsiveField from './components/CreativeResponsiveField';
import CreativePathsField from './components/CreativePathsField';

export default () => {
  const { isSearch, isNetworkSelected } = useCreateAd();
  const facebookSelected = isNetworkSelected('facebook');

  return (
    <Grid container>
      <Grid item xs={12}>
        <ExpansionPanel expanded title='Creative Name' subTitle='Enter Creative Name'>
          <CreativeNameField />
        </ExpansionPanel>
        {isSearch && (
          <ExpansionPanel expanded title='Choose Responsive' subTitle='Choose Responsive'>
            <CreativeResponsiveField />
          </ExpansionPanel>
        )}
        <ExpansionPanel expanded title='Creative Link' subTitle='Enter Creative Link Here'>
          <CreativeUrlField />
        </ExpansionPanel>
        {isSearch && (
          <ExpansionPanel expanded title='Creative Paths' subTitle='Enter Creative Paths'>
            <CreativePathsField />
          </ExpansionPanel>
        )}
        {facebookSelected && (
          <ExpansionPanel expanded title='Choose Pixel' subTitle='Choose Facebook pixel Here'>
            <CreativePixelField />
          </ExpansionPanel>
        )}
        {facebookSelected && (
          <ExpansionPanel expanded title='Choose Facebook Page' subTitle='Choose Facebook Page'>
            <FacebookPageField />
          </ExpansionPanel>
        )}
        {!isSearch && (
          <ExpansionPanel expanded title='Choose Image Image' subTitle='Choose Image Image'>
            <CreativeImageField name='creative_image' aspect={1.91} network='google' type='' />
          </ExpansionPanel>
        )}
        {!isSearch && (
          <ExpansionPanel expanded title='Choose Logo' subTitle='Choose Logo'>
            <CreativeImageField
              name='creative_logo_image'
              aspect={1}
              network='google'
              type='logo'
            />
          </ExpansionPanel>
        )}
        {!isSearch && (
          <ExpansionPanel expanded title='Upload Video' subTitle='Choose Video'>
            <CreativeVideoField />
          </ExpansionPanel>
        )}
        <ExpansionPanel expanded title='Choose Headlines' subTitle='Choose Headlines'>
          <CreativeHeadlinesField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Choose  Descriptions' subTitle=' Descriptions'>
          <CreativeDescriptionFields />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Choose  Description' subTitle='Choose  Description'>
          <CreativeLongHeadlineField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Primary Text' subTitle='Choose  Primary Text'>
          <CreativePrimaryTextField />
        </ExpansionPanel>
        {!isSearch && (
          <ExpansionPanel expanded title='Business Name' subTitle='Choose Google Business Name'>
            <CreativeBusinessNameField />
          </ExpansionPanel>
        )}
        <ExpansionPanel expanded title='Enter Parameters' subTitle='Choose Ad Parameters'>
          <CreativeParametersField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Display Link' subTitle='Choose Facebook Display Link'>
          <CreativeDisplayLinkField />
        </ExpansionPanel>
        {!isSearch && (
          <ExpansionPanel expanded title='Call To Actions' subTitle='Choose Call To Action'>
            <CallToActionsField />
          </ExpansionPanel>
        )}
        {!isSearch && (
          <ExpansionPanel expanded title='Gmail Fields' subTitle='Enter Gmail Ad Fields'>
            <CreativeGmailFields />
          </ExpansionPanel>
        )}
      </Grid>
    </Grid>
  );
};
