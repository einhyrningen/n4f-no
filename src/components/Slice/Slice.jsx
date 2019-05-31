import React, { useMemo } from 'react';
import * as T from 'prop-types';

import TextSlice from './TextSlice';
import GallerySlice from './GallerySlice';

const Echo = prepend => props => prepend;

// TODO: replace Echo component with real implementation
const componentMap = {
  text: TextSlice,
  text1: TextSlice,
  hero: Echo('Hero'),
  image_gallery: GallerySlice,
};

/**
 * display list of slices that send in `body` prop with defined `order`
 *
 * @param body Array{Object} (array of slices)
 * @param order Array{String} (order of slices to display)
 * @returns {*}
 * @constructor
 */
const Slice = ({ body, order }) => {
  const slices = useMemo(() => body
    .sort((a, b) => {
      const aIndex = order.indexOf(a.slice_type) !== -1 ? order.indexOf(a.slice_type) : Infinity;
      const bIndex = order.indexOf(b.slice_type) !== -1 ? order.indexOf(b.slice_type) : Infinity;
      return aIndex < bIndex ? -1 : 1;
    }),
  [body, order])
    .filter(
      slice => componentMap[slice.slice_type],
    )
    .map((slice) => {
      slice.Component = componentMap[slice.slice_type];
      return slice;
    });

  return (
    <>
      {slices.map(({ Component, ...props }, i) => (
        <Component key={i} {...props} />
      ))}
    </>
  );
};

Slice.propTypes = {
  body: T.arrayOf(T.any).isRequired,
  order: T.arrayOf(T.string),
};

Slice.defaultProps = {
  order: [],
};

export default Slice;
