import React from 'react';
import { Box, Text, TextArea, Button, TextInput } from 'grommet';
import styled from 'styled-components';
import { Form, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';

import N4FContainer from '../layout/N4FContainer';
import N4FLayout from '../layout/N4FLayout';

const MaxWidthBox = styled(Box)`
  max-width: 390px;
`;

const StyledButton = styled(Button)`
  padding: 5px 15px 6px;
  max-width: 200px;
`;

/**
 * @todo Finish contact form implementation
 * @body This only submits, and it might be better to replace it with a more "gatsby native" functionality.
 */
const contactUsFormEnhancer = withFormik({
  displayName: 'ContactUs',
  // mapPropsToValues: props => ({ email: props.user.email }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
});

const ContactUs = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
}) => {
  return (
    <N4FLayout>
      <N4FContainer direction="row" gap="medium">
        <Box flex="grow">
          <Form onSubmit={handleSubmit}>
            <Box gap="20px">
              <TextInput
                name="name"
                focusIndicator
                placeholder="Fornavn"
                onChange={handleChange}
                value={values.name || ''}
              />
              <TextInput
                name="email"
                focusIndicator
                placeholder="E-post"
                onChange={handleChange}
                value={values.email || ''}
              />
              <TextInput
                name="subject"
                focusIndicator
                placeholder="Emne"
                onChange={handleChange}
                value={values.subject || ''}
              />
              <TextArea
                name="message"
                focusIndicator
                placeholder="Melding"
                onChange={handleChange}
                value={values.message || ''}
                rows={6}
              />

              <StyledButton primary label="Ta kontakt" />
            </Box>
          </Form>
        </Box>

        <MaxWidthBox>
          {/**
           * @todo Change to settings?
           * @body Should we utilize a API endpoint for information here? This would help _Sekreteriatet_ do changes without changing code.
           */}
          <Text weight="bold">
            Hyperion - Norsk Forbund For Fantastiske Fritidsinteresser
          </Text>
          <Text color="subTextSecond">Org. nr.: 984 302 320</Text>

          <Text color="subTextSecond" margin="15px 0 0">
            Kolstadgata 1 0123 Oslo
          </Text>

          <Text color="subTextSecond" margin="15px 0 15px">
            Tlf.: 23 00 30 00 E-post: n4f@n4f.no
          </Text>

          <StyledButton label="Se vårt sekræteriat" />
        </MaxWidthBox>
      </N4FContainer>
    </N4FLayout>
  );
};

export default contactUsFormEnhancer(ContactUs);
