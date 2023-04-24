import '../styles/app.css'
import Nav from '../components/nav.js'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Nav></Nav>
      <Component {...pageProps} />
  </>
  );
}
