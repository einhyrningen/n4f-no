import React from 'react';
import '../index.css';
import { Grommet } from 'grommet';

import ContactUsComponent from '../components/contact-us/ContactUs';
import theme from '../styles/theme';

const ContactUs = () => {
  return (
    <Grommet theme={theme}>
      <ContactUsComponent />
    </Grommet>
  );
}

export default ContactUs;
