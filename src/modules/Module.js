import React from 'react';
import { renderRoutes } from '../routes';

class Module {
  constructor(args) {
    this.routes = args.routes || null;
  }

  render() {
    if (Array.isArray(this.routes)) {
      return renderRoutes(this.routes);
    }
  }
}

export default Module;
