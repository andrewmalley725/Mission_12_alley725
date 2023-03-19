import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayTeams from './displayTeams';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <h1>March Madness Teams</h1><br/>
    <DisplayTeams/>
  </div>
  
);


