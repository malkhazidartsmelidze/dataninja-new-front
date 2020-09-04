import React from 'react';

export default (props) => {
  const {
    match: {
      params: { type, network, goal },
    },
  } = props;

  return (
    <div>
      {type} {network} {goal}
    </div>
  );
};
