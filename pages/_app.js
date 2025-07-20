import '../styles/globals.css';
import React from 'react';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
} 