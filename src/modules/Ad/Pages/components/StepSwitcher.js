import React from 'react';
import { Button } from '@material-ui/core';

export default ({ onNext, onPrevious, activeStep }) => {
  return (
    <div style={{ marginTop: '5rem' }}>
      <Button disabled={activeStep === 0} onClick={onPrevious}>
        Back
      </Button>
      <Button variant='contained' color='primary' onClick={onNext}>
        Next
      </Button>
    </div>
  );
};
