import React from 'react';
import Module from 'modules/Module';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.USER_MODULE,
        secured: true,
        component: () => <div>This is user module</div>,
      },
    ],
  });
  return mod.render();
};
