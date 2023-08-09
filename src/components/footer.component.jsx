import React from 'react';
import Socials from './socials/socials.component';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='footer'>
      <h5>Aligarh</h5>
      <p className='copy'>© {year} All Rights Reserved Dev-f-NR</p>
      <Socials marginTop='27px' />
    </footer>
  );
}
