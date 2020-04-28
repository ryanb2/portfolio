import React from 'react';
import {
  BrowserRouter as Router,
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
            <Link to="/portfolio/">Home</Link>{ ` | ` }
            <Link to="/portfolio/interests">Interests</Link>{ ` | ` }
            <Link to="/portfolio/projects">Projects</Link>{ ` | ` }
            <Link to="/portfolio/contact">Contact</Link>
          </nav>
        </header>
        <section className="App-body">
          <Switch>
            <Route path="/portfolio/interests" component={ Interests } />
            <Route path="/portfolio/projects" component={ Projects } />
            <Route path="/portfolio/contact" component={ Contact } />
            <Route path="/portfolio" component={ Home } />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
