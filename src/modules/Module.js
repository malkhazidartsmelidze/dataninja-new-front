import React from 'react';
import { renderRoutes } from 'routes';

class Module {
  constructor(module) {
    this.routes = module.routes;
    this.layout = module.layout;
  }

  renderRoutes() {
    return renderRoutes(this.routes);
  }

  render() {
    if (this.layout) {
      return this.renderWithLayout();
    } else {
      return this.renderWithoutLayout();
    }
  }

  renderWithLayout() {
    return <this.layout>{this.renderRoutes()}</this.layout>;
  }

  renderWithoutLayout() {
    return <>{this.renderRoutes()}</>;
  }
}

export default Module;