import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const N4FContainer = styled(Box)`
  margin: 0 auto;
  width: 1140px;
  
  @media (max-width: 1200px) {
    width: 768px;
  }
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default N4FContainer;
