import React from 'react';
import '../index.css';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../components/landing/Landing';
import theme from '../styles/theme';

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    </Grommet>
  );
}

export default App;
