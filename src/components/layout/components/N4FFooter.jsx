import React from 'react';
import styled from 'styled-components';
import { Text, Box, Button } from 'grommet';

import './N4FFooter.scss';
import N4FContainer from '../N4FContainer';
import N4FLogo from './N4FLogo';


const StyledN4FLogo = styled(N4FLogo)`
  width: 200px;
`;

function N4FFooter() {
  /**
   * @todo Replace to API endpoint
   * @body This also, should use a endpoint of sorts. It makes more sense.
   */
  return (
    <footer>
      <Box background="brand">
        <N4FContainer pad={{ vertical: '53px' }} gap="large" direction="row">
          <Box gap="medium">
            <StyledN4FLogo fill="#FFFFFF" />
            <Button label="Kontakt oss" />
          </Box>

          <Box>
            <Text weight="bold">
              Hyperion - Norsk Forbund for Fantastiske Fritidsinteresser
            </Text>

            <Text size="small">Org. nr.: 984 302 320</Text>
            <Text size="small" margin="20px 0 0">
              Kolstadgata 1
              <br />
              0123 Oslo
            </Text>
            <Text size="small" margin="20px 0 0">
              Tlf.: 23 00 30 00
              <br />
              E-post: n4f@n4f.no
            </Text>
          </Box>
        </N4FContainer>
      </Box>
    </footer>
  );
}

export default N4FFooter;
