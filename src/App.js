import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Interests from './components/interests/Interests';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Banner from './components/Banner';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <header className="App-header">
          <h1>Brendan Ryan</h1>
          <nav className="App-nav">
            <Link to="/">Home</Link>{ ` | ` }
            <Link to="/interests">Interests</Link>{ ` | ` }
            <Link to="/projects">Projects</Link>{ ` | ` }
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <section className="App-body">
          <Switch>
            <Route path="/interests">
              <Interests />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
