import React from 'react'
import './assets/styles/reset.scss';
import './assets/styles/index.scss';
import { LandingPage } from './Components/LandingPage/LandingPage';

export const App = ()=> {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

