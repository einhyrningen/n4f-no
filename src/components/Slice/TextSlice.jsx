import React from 'react';
import * as T from 'prop-types';
import { Text, Heading, Paragraph } from 'grommet';
import N4FContainer from '../layout/N4FContainer';

const TextSlice = ({ primary: { text: { raw } } }) => {
  return (
    <N4FContainer>
      {raw.map((part, index) => {
        const ind = `text-key-${index}`;

        if (part.type === 'paragraph') {
          return <Paragraph key={ind}>{part.text}</Paragraph>;
        }

        if (part.type.indexOf('heading') !== -1) {
          return <Heading key={ind} level={part.type.replace('heading', '')}>{part.text}</Heading>;
        }

        return part.text;
      })}
    </N4FContainer>
  );
};

TextSlice.propTypes = {
  primary: T.shape({
    raw: T.arrayOf(T.shape({
      text: T.string,
      type: T.oneOf(['paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6']),
    })),
  }).isRequired,
};

export default TextSlice;
