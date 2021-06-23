import React from "react";
import './Splash.css'

export default function Splash() {
  return (
    <div className='splash__container'>
      <div className='polaroid'>
        <img src='/image001.jpg' alt='image' />
        <div className='all_images'>
          <p>I am just uploading pics, we can discuss format</p>
        </div>
      </div>
      <div className='polaroid'>
        <img src='/image002.jpg' alt='image' />
        <div className='all_images'>
          <p>Full Color</p>
        </div>
      </div>
      <div className='polaroid'>
        <img src='/image003.jpg' alt='image' />
        <div className='all_images'>
          <p>Full Color</p>
        </div>
      </div>
      <div className='polaroid'>
        <img src='/image004.jpg' alt='image' />
        <div className='all_images'>
          <p>Full Color</p>
        </div>
      </div>
      <div className='polaroid'>
        <img src='/image005.jpg' alt='image' />
        <div className='all_images'>
          <p>Full Color</p>
        </div>
      </div>
    </div>
  );
}
