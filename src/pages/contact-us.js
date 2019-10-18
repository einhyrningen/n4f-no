import React from 'react';
import '../index.css';
import { Grommet } from 'grommet';

import ContactUsComponent from '../components/contact-us/ContactUs';
import theme from '../styles/theme';
/**
 * @todo Make a JSX out of contact us component
 * @body The ContactUs component should be renamed.
 */
const ContactUs = () => {
  return (
    <Grommet theme={theme}>
      <ContactUsComponent />
    </Grommet>
  );
}

export default ContactUs;
