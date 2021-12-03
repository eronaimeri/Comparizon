import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Plans from './pages/Plans/Plans';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Disclaimer from './pages/Disclaimer/Disclaimer'
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Plans" exact component={Plans} />
        <Route path="/Blogs" exact component={Blogs} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/About" exact component={About} />
        <Route path="/Disclaimer" exact component={Disclaimer} />
        <Route path="/Privacy" exact component={Privacy} />
        <Route path="/Terms" exact component={Terms} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
