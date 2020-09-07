import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { Slider, Grid, Typography } from '@material-ui/core';

export default (props) => {
  const [sizeRanges, setSizeRanges] = useState([0, 10]);

  const handleSizeRangeChange = (_, newValue) => {
    setSizeRanges(newValue);
  };

  return (
    <PanelField
      content={
        <Grid container direction='column' spacing={2}>
          <input type='hidden' name='size[from]' value={sizeRanges[0] / 10} />
          <input type='hidden' name='size[to]' value={sizeRanges[1] / 10} />
          <Grid item xs={12}>
            <SelectField
              style={{ width: 500 }}
              options={sizeOptions}
              name='number'
              defaultValue={1}
              label='Number of Lookalike Audiences'
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id='discrete-slider-custom' variant='body2' gutterBottom>
              Audience size ranges from 1% to 10% of the combined population of your selected
              locations. A 1% lookalike consists of the people who are most similar to your
              lookalike source. Increasing the percentage creates a bigger, broader audience
            </Typography>
            <Slider
              defaultValue={sizeRanges}
              valueLabelFormat={valueLabelFormat}
              onChange={handleSizeRangeChange}
              aria-labeledby='discrete-slider-custom'
              step={null}
              valueLabelDisplay='auto'
              marks={marks}
            />
          </Grid>
        </Grid>
      }
    />
  );
};

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 10,
    label: '1%',
  },
  {
    value: 20,
    label: '2%',
  },
  {
    value: 30,
    label: '3%',
  },
  {
    value: 40,
    label: '4%',
  },
  {
    value: 50,
    label: '5%',
  },
  {
    value: 60,
    label: '6%',
  },
  {
    value: 70,
    label: '7%',
  },
  {
    value: 80,
    label: '8%',
  },
  {
    value: 90,
    label: '9%',
  },
  {
    value: 100,
    label: '10%',
  },
];

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const sizeOptions = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
];
