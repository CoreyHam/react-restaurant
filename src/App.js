import React from 'react';
import Layout from './Layout.js';
import NavbarComp from './navbarComp.js';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons'


function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;

function Home() {
  return (
    <div className='hero-container' >
      <div className='hero'><h1 className='restName'>SAMPLE TEXT</h1></div>
      <h1>ABOUT</h1>
      <div className='about'>
        <div className='location'>
          <h1>LOCATION</h1>
          <h3>348 E Main St, Lexington, KY</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211231743014!2d-84.49472698487006!3d38.04216420450369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1647547870485!5m2!1sen!2sus"></iframe>
        </div>
        <div className='hours'>
          <h1>HOURS</h1>
            <h3>Monday - Friday</h3>
            <h3>8am-8pm</h3>
            <h3>Sunday-Saturday</h3>
            <h3>6am - 10pm</h3>
        </div>
      </div>
      <h1>Socials</h1>
      <div className='socials'>
        <div className='icons'>
        <h1>
          <Instagram />
        </h1>
        <h1>
          <Facebook />
        </h1>
        <h1>
          <Twitter />
        </h1>
        </div>
      </div>
    </div>
  );
}