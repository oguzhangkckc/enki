import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai';



export default function Footer() {

  const mapStyles = {
    height: '200px',
    width: '100%',
  };
  const defaultCenter = {
    lat: 40.983123,
    lng: 29.087809
  };

  return (
    <div>
      <div className='flex flex-wrap my-20 mx-20 items-row justify-between'>
        <div className='pl-24'>
          <div>
            <h1 className='text-red-500 text-6xl font-bold'>enki</h1>
            <p className='pt-5'>Our company has successfully met the<br /> demands of Industrial Organizations serving<br /> projects both in Turkey and abroad, and has had<br /> the opportunity to show the performance of the<br /> products we represent.</p>
          </div>
          <div className="flex flex-row justify-bottom mt-16 gap-x-12">
            <a href="https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/" className='w-8 h-8'>
              <AiFillLinkedin size={32} className="text-gray-600" />
            </a>

            <a href="https://www.instagram.com/oguzhangokcekoca/" className='w-8 h-8'>
              <AiFillInstagram size={32} className="text-gray-600" />
            </a>

            <a href="mailto:ogokcekoca@gmail.com" className='w-8 h-8'>
              <AiFillMail size={32} className="text-gray-600" />
            </a>
          </div>

        </div>
        <div>
          <h2 className='text-xl font-bold mt-10'>Industries</h2>
          <ul className='flex flex-col pt-5 gap-y-3'>
            <li>Steel Pipe Coatings</li>
            <li>Steel Pipe Coating Rehabilitation</li>
            <li>Industrial Corrosion Solutions</li>
            <li>Zec Silicone Rubber</li>
            <li>Medical Products</li>
            <li>Baby Products</li>
          </ul>
        </div>
        <div className='pr-28'>
          <h2 className='text-xl  font-bold mt-10'>Contact Us</h2>
          <p className='pt-5'>Sahrayı Cedit, Cebesoy Sk. No:26,<br /> 34734 Kadıköy/İstanbul</p>
          <p className='pt-3'>0 216 467 38 57</p>
          <p className='pb-20'>0 216 467 39 13</p>
          <LoadScript googleMapsApiKey=''>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
          </LoadScript>
        </div>
      </div> 
      <div className='h-px mx-40 border border-r border-gray-500 mb-4' />
      <div className='flex justify-center mb-2'>
        <p className='text-gray-500'>© 2023 All rights reserved.</p>
      </div>   
    </div> 
  ) 
} 