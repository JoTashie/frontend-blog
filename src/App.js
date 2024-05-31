import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          {/* Define routes for other pages */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;