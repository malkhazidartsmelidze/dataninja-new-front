import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';

export default () => {
  const { setField, getField } = useNewAdContext();
  const _callToActionText = getField('call_to_action_text');
  const [callToActionText, setCallToActionText] = useState(_callToActionText.value);

  useEffect(() => {
    if (callToActionText == callToActionText.value) return;
    const deb = setTimeout(() => setField('call_to_action_text', callToActionText), 500);
    return () => clearTimeout(deb);
  }, [callToActionText]);

  return (
    <PanelField
      title='Enter Ad callToActionText'
      content={
        <TextField
          name='call_to_action_text'
          value={callToActionText}
          onChange={(e) => setCallToActionText(e.target.value)}
          placeholder='Buy Now'
        />
      }
    />
  );
};
