import React, { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'
import './App.css';
import projects from './data/projects.json';
import './style.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };
 
render() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={() => {
            return this.state.projects.map(project => (
              <Project
                id={project.id}
                name={project.name}
                repo={project.repo}
                link={project.link}
                image={project.image}
              />
            ))
        }} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}
}


export default App;