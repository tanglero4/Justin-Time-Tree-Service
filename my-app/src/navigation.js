import React from 'react';

function NavigationBar() {
  return (
      <section className="hero">
    <nav>
      <ul>
         <li className='title'>Justin Time Tree Service</li>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
         <section className='slogan'>
        <p>Experience the Art of Landscape Design and Tree Care</p>
        </section> 
      </section>
  );
}

export default NavigationBar;