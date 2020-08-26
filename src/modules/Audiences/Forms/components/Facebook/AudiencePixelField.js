import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const pixelOptions = [{ name: 'Pixel 1', value: 'pixel1' }];
  const [pixel, setPixel] = useState('pixel1');

  const onChange = (e) => {
    setPixel(e.target.value);
  };

  return (
    <PanelField
      content={<SelectField options={pixelOptions} value='pixel1' onChange={onChange} />}
    />
  );
};
