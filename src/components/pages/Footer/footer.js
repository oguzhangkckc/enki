import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


export default function Footer() {

  const mapStyles = {
    height: '400px',
    width: '100%'
  };
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194
  };

  return (
    <div>
      <div className='flex flex-wrap mt-20 mx-20 items-row justify-between'>
        <div>
          <h1 className='text-red-500 text-6xl font-bold'>enki</h1>
          <p>Our company has successfully met the<br /> demands of Industrial Organizations serving<br /> projects both in Turkey and abroad, and has had<br /> the opportunity to show the performance of the<br /> products we represent.</p>
        </div>
        <div>
          <h2>Industries</h2>
          <ul>
            <li>Steel Pipe Coatings</li>
            <li>Steel Pipe Coating Rehabilitation</li>
            <li>Industrial Corrosion Solutions</li>
            <li>Zec Silicone Rubber</li>
            <li>Medical Products</li>
            <li>Baby Products</li>
          </ul>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Sahrayı Cedit, Cebesoy Sk. No:26,<br /> 34734 Kadıköy/İstanbul</p>
          <p>0 216 467 38 57</p>
          <p>0 216 467 39 13</p>
          <LoadScript googleMapsApiKey=''>
            <GoogleMap />
          </LoadScript>
        </div>
      </div>
    </div>
  )
}
