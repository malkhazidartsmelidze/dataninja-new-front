import React from 'react';
import { renderRoutes } from '../routes';

class Module {
  constructor(args) {
    this.routes = args.routes || null;
  }

  render() {
    console.log(this.routes);
    if (Array.isArray(this.routes)) {
      return renderRoutes(this.routes);
    }

    return <div>afsafs</div>;
  }
}

export default Module;
