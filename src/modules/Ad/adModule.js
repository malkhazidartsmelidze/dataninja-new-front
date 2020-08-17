import React from 'react';
import Module from 'modules/Module';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AD_MODULE,
        secured: true,
        component: () => <div>this is ad module</div>,
      },
    ],
  });
  return mod.render();
};
