import React from 'react';
import * as T from 'prop-types';
import { RichText } from 'prismic-reactjs';
// import { Text, Heading, Paragraph } from 'grommet';
import N4FContainer from '../layout/N4FContainer';

const TextSlice = ({ primary }) => {
  const text = RichText.render(primary.text.raw.map((part => ({
    ...part,
    spans: [],
  }))));
  return (
    <N4FContainer>
      {text}
    </N4FContainer>
  );
};

TextSlice.propTypes = {
  primary: T.objectOf(T.any),
};

TextSlice.defaultProps = {
  primary: null,
};

export default TextSlice;
