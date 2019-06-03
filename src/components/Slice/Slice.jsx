import React from 'react';
import * as T from 'prop-types';

import TextSlice from './TextSlice';
import GallerySlice from './GallerySlice';

/**
 * display list of slices that send in `body`
 *
 * @param body Array{Object} (array of slices)
 * @returns {*}
 * @constructor
 */
const Slice = ({ body }) => {
  console.log('slice', body);
  return body
    .map((slice, i) => {
      console.log(slice, i);
      switch (slice.slice_type) {
        case 'text':
          console.log(slice.primary);
          return <TextSlice key={i} primary={slice.primary} />;
        default:
      }
    });
};

Slice.propTypes = {
  body: T.arrayOf(T.any).isRequired,
};

export default Slice;
