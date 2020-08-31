import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { FormControl, FormControlLabel, Checkbox, Tooltip, Radio } from '@material-ui/core';

const options = {
  top_10: { name: 'Top 10%' },
  '11_20': { name: '11 - 20%' },
  '21_30': { name: '21 - 30%' },
  '31_40': { name: '31 - 40%' },
  '41_50': { name: '41 - 50%' },
  lower_50: { name: 'Lower 50%' },
  unknown: { name: 'Unknown' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const incomes = getField('targeting_household_income');

  const handleChangeRadio = (e) => {
    const chosenField = e.target.value;
    const checked = e.target.checked;

    if (!checked && isIncomeSelected(chosenField)) {
      incomes.value.splice(incomes.value.indexOf(chosenField), 1);
      setField('targeting_household_income', incomes.value);
    } else {
      setField('targeting_household_income', [...incomes.value, chosenField]);
    }
  };

  const isIncomeSelected = (val) => {
    return incomes.value.indexOf(val) !== -1;
  };

  return (
    <PanelField
      title='Choose Household Income'
      content={
        <>
          {Object.keys(options).map((key) => {
            return (
              <FormControl fullWidth key={key}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isIncomeSelected(key)}
                      onChange={handleChangeRadio}
                      name='targeting_household_income'
                      value={key}
                    />
                  }
                  label={options[key].name}
                />
              </FormControl>
            );
          })}
        </>
      }
    />
  );
};
