
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import CoverPicture from '../CoverPicture';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <CoverPicture />
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};