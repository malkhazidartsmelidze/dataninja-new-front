import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreativeNameField from './components/CreativeNameField';
import FacebookPageField from './components/FacebookPageField';
import CreativeFacebookImageField from './components/CreativeFacebookImageField';
import CreativeHeadlinesField from './components/CreativeHeadlinesField';
import CreativeLongHeadlineField from './components/CreativeLongHeadlineField';
import CreativeDisplayLinkField from './components/CreativeDisplayLinkField';
import CreativePrimaryTextField from './components/CreativePrimaryTextField';

export default (props) => {
  const { context, setContext, networks } = props;
  const [bidType, setBidType] = useState('automatic');

  return (
    <Grid container>
      <Grid item xs={12}>
        <ExpansionPanel title='Creative Name' subTitle='Enter Creative Name'>
          <CreativeNameField />
        </ExpansionPanel>
        <ExpansionPanel title='Choose Facebook Page' subTitle='Choose Facebook Page'>
          <FacebookPageField />
        </ExpansionPanel>
        <ExpansionPanel title='Choose Facebook Image' subTitle='Choose Facebook Image'>
          <CreativeFacebookImageField />
        </ExpansionPanel>
        <ExpansionPanel title='Choose Facebook Headlines' subTitle='Choose Facebook Headlines'>
          <CreativeHeadlinesField />
        </ExpansionPanel>
        <ExpansionPanel title='Choose Facebook Description' subTitle='Choose Facebook Description'>
          <CreativeLongHeadlineField />
        </ExpansionPanel>
        <ExpansionPanel title='Primary Text' subTitle='Choose Facebook Primary Text'>
          <CreativePrimaryTextField />
        </ExpansionPanel>
        <ExpansionPanel title='Display Link' subTitle='Choose Facebook Display Link'>
          <CreativeDisplayLinkField />
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};
