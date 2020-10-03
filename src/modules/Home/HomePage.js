import React from 'react';
import Header from './components/header/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './homepage.css';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
