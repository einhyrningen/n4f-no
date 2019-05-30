import React from 'react';
import '../index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../components/landing/Landing';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
