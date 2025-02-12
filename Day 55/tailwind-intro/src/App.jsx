import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import TechStack from './components/TechStack';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <TechStack />
    </div>
  );
}

export default App;
