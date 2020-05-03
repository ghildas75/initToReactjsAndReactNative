import React from 'react';

import './App.css';
import PlayerRealMadrid from './components/playerRealMadrid';
function App() {
  return (
    <div className="m-3">
      <PlayerRealMadrid value={1} title="Real Madrid Benzema"  image="pictures/benz.jpg"/>
      <PlayerRealMadrid value={2} title="Real Madrid Zidane" image="pictures/zidane.jpg"/>
    </div>
  );
}

export default App;
