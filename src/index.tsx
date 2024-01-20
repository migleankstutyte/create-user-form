import React from 'react';
import ReactDOM from 'react-dom/client';

import CreateUser from './pages/CreateUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CreateUser />
  </React.StrictMode>
);
