import React from 'react';
import * as T from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Box } from 'grommet';
import styled from 'styled-components';
// import { Text, Heading, Paragraph } from 'grommet';
import N4FContainer from '../layout/N4FContainer';

const Highlight = styled(Box)`
  font-size: 1.5rem;
`;

const HighlightSlice = ({ primary }) => {
  /**
   * @todo Should we use Highlight Slice?
   * @body This was built when we used Prismic, is it usable?
   */
  const text = RichText.render(primary.text.raw.map((part => ({
    ...part,
    spans: [],
  }))));
  return (
    <N4FContainer>
      <Highlight>{text}</Highlight>
    </N4FContainer>
  );
};

HighlightSlice.propTypes = {
  primary: T.objectOf(T.any),
};

HighlightSlice.defaultProps = {
  primary: null,
};

export default HighlightSlice;
