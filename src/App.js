import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PersonalInfo from './Components/PersonalInfo';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
                <div id="container">
                <Header />
                    <ul>
                        <li><Link to="/personalinfo" >Personal Info</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                    <Route path="/personalinfo" component={PersonalInfo} />
                    <Route path= "/skills" component ={Skills} />
                    <Route path="/portfolio" component={Portfolio} />
                </div>
            </Router>
        
        <Footer />
      </div>
    );
  }
}

export default App;
