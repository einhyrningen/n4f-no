import React, { useMemo } from 'react';
import * as T from 'prop-types';


const Echo = prepend => props => prepend + ' ' + JSON.stringify(props);

// TODO: replace Echo component with real implementation
const componentMap = {
  text: Echo('Text'),
  text1: Echo('Text1'),
  hero: Echo('Hero'),
  image_gallery: Echo('ImageGallery'),
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
      const aIndex = order.indexOf(a.slice_type);
      const bIndex = order.indexOf(b.slice_type);
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
      {slices.map(({ Component, ...props }) => (
        <Component {...props} />
      ))}
    </>
  );
};

Slice.propTypes = {
  body: T.shape(T.any),
  order: T.arrayOf(T.string),
};

Slice.defaultProps = {
  body: {},
  order: [],
};

export default Slice;
