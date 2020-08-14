import React from 'react';
import Module from 'modules/Module';

export default () => {
  const module = new Module({
    routes: [
      {
        path: '/login',
        render: () => <div>This is login Routes</div>,
      },
    ],
  });

  return module.render();
};
