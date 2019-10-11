import React from 'react';
import { Grommet, Heading } from 'grommet';
import theme from '../styles/theme';
import N4FLayout from '../components/layout/N4FLayout';
import Slice from '../components/Slice/Slice';

const Page = ({ pageContext }) => {
  return (
    <Grommet theme={theme}>
      <N4FLayout>
        <Heading>{pageContext.data.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: pageContext.data.content }} />
        {/* <Slice body={pageContext.data.body} /> */}
      </N4FLayout>
    </Grommet>
  );
};

export default Page;
