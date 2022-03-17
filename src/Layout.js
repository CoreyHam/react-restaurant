import React from 'react';
import NavbarComp from './navbarComp.js';


function Layout({ children }) {
  return (
    <>
      <NavbarComp />
      {children}
    </>
  );
}

export default Layout;