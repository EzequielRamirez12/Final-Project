// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewYork from './Components/NewYork';
import London from './Components/London';
import Paris from './Components/Paris';
import Sydney from './Components/Sydney';
import Tokyo from './Components/Tokyo';
import Rome from './Components/Rome';
import Beijing from './Components/Beijing';
import Vegas from './Components/Vegas'; // Added Vegas
import './Components/Navigation.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/new-york">New York</Link>
            </li>
            <li>
              <Link to="/london">London</Link>
            </li>
            <li>
              <Link to="/paris">Paris</Link>
            </li>
            <li>
              <Link to="/sydney">Sydney</Link>
            </li>
            <li>
              <Link to="/tokyo">Tokyo</Link>
            </li>
            <li>
              <Link to="/rome">Rome</Link>
            </li>
            <li>
              <Link to="/beijing">Beijing</Link>
            </li>
            <li>
              <Link to="/vegas">Las Vegas</Link>
            </li>
          </ul>
        </nav>

        <Route path="/new-york" component={NewYork} />
        <Route path="/london" component={London} />
        <Route path="/paris" component={Paris} />
        <Route path="/sydney" component={Sydney} />
        <Route path="/tokyo" component={Tokyo} />
        <Route path="/rome" component={Rome} />
        <Route path="/beijing" component={Beijing} />
        <Route path="/vegas" component={Vegas} /> {/* Added Vegas */}
      </div>
    </Router>
  );
};

export default App;
