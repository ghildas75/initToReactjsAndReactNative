import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Link, Switch ,BrowserRouter as Router} from 'react-router-dom';
import PlayerRealMadrid from "./components/playerRealMadrid";
import { HitPixBay} from "./components/hitPixBay";
import {AboutPlayer} from "./components/aboutPlayer";
import {HitItemDetails} from "./components/hitItemDetails";


function App() {

    return(
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark m-1">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className='nav-link' to="/home">Home</Link>
                  </li>
                    <li  className="nav-item">
                        <Link  className='nav-link' to="/player">Player</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className='nav-link' to="/hits">Images</Link>
                    </li>

                    <li className="nav-item">
                        <Link className='nav-link' to="/about">About player</Link>
                    </li>
                </ul>

            </nav>
            <div className="container-fluid">
                <Switch>
                    <Route path="/home"></Route>
                    <Route path="/about" component={AboutPlayer}></Route>
                    <Route path="/player" component={PlayerRealMadrid}></Route>
                    <Route path="/hits" component={HitPixBay}></Route>
                    <Route path="/hitDetails/:id" component={HitItemDetails}></Route>
                </Switch>

            </div>

        </Router>

    )
  /*return (
    <div className="m-3">
      <PlayerRealMadrid value={1} title="Real Madrid Benzema"  image="pictures/benz.jpg"/>
      <PlayerRealMadrid value={2} title="Real Madrid Zidane" image="pictures/zidane.jpg"/>
    </div>
  );*/
}

export default App;
