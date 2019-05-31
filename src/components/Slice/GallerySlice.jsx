import React, { useContext } from 'react';
import * as T from 'prop-types';
import { Grid, Box, Text, ResponsiveContext } from 'grommet';
import Img from 'gatsby-image';
import N4FContainer from '../layout/N4FContainer';

const GallerySlice = ({ items }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box background="lightGray" pad="large">
      <N4FContainer>
        <Grid gap="medium" columns={size === 'small' ? ['1fr', '1fr'] : ['1fr', '1fr', '1fr']}>

          {items.map(item => (
            <Box>
              <Img fluid={item.gallery_image.localFile.childImageSharp.fluid} />

              {/* todo:  */}
              <Box margin="7px 0 0" pad="13px" background="white">
                <Text weight="bold">Mikkel Lahlum</Text>
                <Text size="xsmall" color="subText">Organisasjonssekretær</Text>

                <Text margin="10px 0 0" size="xsmall" color="subText">Telefon: 90 33 11 44</Text>
                <Text size="xsmall" color="subText">E-post: mikkel@n4f.no</Text>
              </Box>
            </Box>
          ))}

        </Grid>
      </N4FContainer>
    </Box>
  );
};

GallerySlice.propTypes = {
  items: T.arrayOf(T.shape({
    gallery_image: T.shape(T.any),
  })).isRequired,
};

export default GallerySlice;
