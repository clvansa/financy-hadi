import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/service/:id" component={Service} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
