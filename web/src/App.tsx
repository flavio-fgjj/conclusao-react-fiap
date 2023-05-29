import React from 'react';
import {RouterProvider} from 'react-router-dom';
import Router from './router/index.routes';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  );
};

export default App;
