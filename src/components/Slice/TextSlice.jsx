import React from 'react';
import * as T from 'prop-types';
import { RichText } from 'prismic-reactjs';
// import { Text, Heading, Paragraph } from 'grommet';
import N4FContainer from '../layout/N4FContainer';

const TextSlice = ({ primary }) => (
  <N4FContainer>
    <RichText render={primary} />
  </N4FContainer>
);

TextSlice.propTypes = {
  primary: T.element.isRequired,
};

export default TextSlice;
