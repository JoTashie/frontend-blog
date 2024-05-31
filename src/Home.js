import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Home = () => {
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
          <h1>Welcome to my React App</h1>
          <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=300" alt="room" />
        </main>
        
        {/* Define routes for other pages */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Router>
    </div>
  );
}

export default Home;
