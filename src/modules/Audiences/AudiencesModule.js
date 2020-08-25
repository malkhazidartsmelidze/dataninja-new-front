import React from 'react';
import Module from 'modules/Module';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AUDIENCES_MODULE,
        exact: true,
        secured: true,
        component: () => <div>this is Audience Module</div>,
      },
      {
        path: P.AUDIENCES_CREATE,
        secured: true,
        exact: true,
        component: () => <div>this is Audience Create</div>,
      },
    ],
  });

  return mod.render();
};
