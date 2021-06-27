import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { } from 'react-bootstrap/';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import projects from './projects.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> */}
          {this.state.projects.map(project => (
            <Project
              id={project.id}
              name={project.name}
              image={project.image}
              repo={project.repo}
              link={project.link}
            />
          ))}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}