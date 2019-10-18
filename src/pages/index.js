import React from 'react';
import '../index.css';
import { Grommet } from 'grommet';

import Landing from '../components/landing/Landing';
import theme from '../styles/theme';
/**
 * @todo Make a JSX out of index component
 * @body The Index component should be renamed.
 */
function Index() {
  return (
    <Grommet theme={theme}>
      <Landing />
    </Grommet>
  );
}

export default Index;
