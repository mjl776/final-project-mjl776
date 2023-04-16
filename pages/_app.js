import '../styles/nav.css'
import '../styles/app.css'
import '../styles/auth.css'
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
