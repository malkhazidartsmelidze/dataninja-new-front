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
    <form>
      <Grid container>
        <Grid item xs={12}>
          <ExpansionPanel title='Creative Name' subTitle='Enter Creative Name'>
            <CreativeNameField
              label='Enter Creative Name'
              name='name'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Choose Facebook Page' subTitle='Choose Facebook Page'>
            <FacebookPageField
              label='Choose Facebook Page'
              name='facebook_page_id'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Choose Facebook Image' subTitle='Choose Facebook Image'>
            <CreativeFacebookImageField
              label='Choose Facebook Image'
              name='media'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Choose Facebook Headlines' subTitle='Choose Facebook Headlines'>
            <CreativeHeadlinesField
              label='Choose Facebook Headlines'
              name='headlines[]'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel
            title='Choose Facebook Description'
            subTitle='Choose Facebook Description'
          >
            <CreativeLongHeadlineField
              label='Enter Description'
              name='descriptions[]'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Primary Text' subTitle='Choose Facebook Primary Text'>
            <CreativePrimaryTextField
              label='Enter Primary Text'
              name='primary_text'
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Display Link' subTitle='Choose Facebook Display Link'>
            <CreativeDisplayLinkField
              label='Display Link'
              name='display_link'
              onChange={(e) => console.log(e.target.value)}
            />
            6
          </ExpansionPanel>
        </Grid>
      </Grid>
    </form>
  );
};
