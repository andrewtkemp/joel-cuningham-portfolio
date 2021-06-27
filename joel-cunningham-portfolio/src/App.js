import { BrowserRouter as Router, Route } from 'react-router-dom';
import { } from 'react-bootstrap/';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Project />
        <Footer />
      </div>
    </Router>
  );
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