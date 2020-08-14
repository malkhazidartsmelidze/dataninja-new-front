import React from 'react';
import Bootstrap from './Bootstrap';
import { renderRoutes, routes } from './routes';

function App() {
  return <Bootstrap>{renderRoutes(routes)}</Bootstrap>;
}

export default App;
