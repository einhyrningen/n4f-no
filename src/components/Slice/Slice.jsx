import React from 'react';
import * as T from 'prop-types';

import TextSlice from './TextSlice';
import GallerySlice from './GallerySlice';
import HighlightSlice from './HighlightSlice';

/**
 * @todo Should we use Slice?
 * @body This was built when we used Prismic, is it usable?
 */

/**
 * display list of slices that send in `body`
 *
 * @param body Array{Object} (array of slices)
 * @returns {*}
 * @constructor
 */
const Slice = ({ body }) => body
  .map((slice, i) => {
    switch (slice.slice_type) {
      case 'text':
        return <TextSlice key={i} primary={slice.primary} />;
      case 'gallery':
        return <GallerySlice key={i} primary={slice.primary} />;
      case 'highlight':
        return <HighlightSlice key={i} primary={slice.primary} />;
      default:
    }
  });

Slice.propTypes = {
  body: T.arrayOf(T.any).isRequired,
};

export default Slice;
