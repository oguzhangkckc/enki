import React, { useState, useEffect } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

import Footer from './footer';
import Navbar from '../Navbar/navbar';

export default function Home() {
  const imageUrls = [
    "https://www.enkiticaret.com.tr/1/images/-cc2a50f4a42b4228ad18a341aa8d72c5.jpg",
    "https://www.enkiticaret.com.tr/1/images/-34d47207c6184722b5285d11b9c09e60.jpg",
    "https://www.enkiticaret.com.tr/1/images/-123a37dc1c8a4e4483fc91290da4d671.jpg",
    "https://www.enkiticaret.com.tr/1/images/-ae52b041abc24f13a301060a0f6ec385.jpg",
    "https://www.enkiticaret.com.tr/1/images/-6f606f6693c84f65aad7765722e13aa9.jpg",
    "https://www.enkiticaret.com.tr/1/images/-2aaadbc6527c41559078363f7995d78f.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const storedIndex = localStorage.getItem('currentImageIndex');
    if (storedIndex) {
      setCurrentImageIndex(parseInt(storedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentImageIndex', currentImageIndex.toString());
  }, [currentImageIndex]);

  return (
    <div className="bg-white w-screen h-1/2 relative mt-20">
      <Navbar />
      {/* Photos */}
      <div>
        <div className="relative">
          <div className="flex w-full h-full overflow-x-auto">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className={`flex-shrink-0 w-screen ${index === currentImageIndex ? 'block' : 'hidden'}`}>
                <img
                  src={imageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={goToPreviousSlide}
          >
            ←
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={goToNextSlide}
          >
            →
          </button>
        </div>

        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
          <div className="bg-white bg-opacity-40 p-8 w-84 h-80 flex flex-col shadow-lg shadow-red-500 justify-center rounded-3xl items-center">
            <p className="text-black font-bold text-2xl text-center">
              "We offer solutions that provide a cost <br /> advantage with our expert and <br /> experienced personnel who have <br /> been working in the sector for a long <br /> time"
            </p>
            <button className="shadow hover:shadow-2xl mt-4 px-6 py-2 rounded-full bg-red-500 text-white hover:bg-gray-700 transition duration-300">
              <a href="/industries">Industries →</a>
            </button>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className='flex items-row gap-x-5 my-14 mx-16'>
        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/enri1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500"
          />
        </div>

        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/kcc1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500"
          />
        </div>

        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/midgold1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500" />
        </div>
        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/pandish1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500" />
        </div>
        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/polyguar1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500" />
        </div>
        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/edda1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500" />
        </div>
        <div>
          <img src="https://www.enkiticaret.com.tr/1/img/mph1.png" alt="" className="hover:grayscale hover:-translate-y-1 transition duration-500" />
        </div>
      </div>
      {/* Video */}
      <div className="relative">
        <img
          src="https://www.teqfocus.com/wp-content/uploads/2019/02/home-infotechno-video-intro-bg.jpg"
          alt=""
          className="w-full h-1/2 object-cover"
        />
        <h1 className="absolute top-1/2 right-20 transform -translate-y-1/2 text-4xl font-bold text-white">
          We offer solutions with our expert<br /> and experienced staff.
        </h1>
      </div>
      {/* Industry */}
      <div className='pt-14'>
        <h2 className='text-sm text-gray-400 font-bold text-center my-10'>I N D U S T R I E S</h2>
        <h1 className='text-2xl font-bold text-center my-10'>Our Activity <span className='text-red-500'>Areas</span></h1>
        <div>
          <div className='flex flex-wrap items-row justify-center gap-y-10 gap-x-10 my-14 mx-16 lg:flex-row-2'>

            <div className='relative shadow-xl pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-c0147a394e1246ada5c8b83bf10e2e70.jfif' alt='' className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Industrial Corrusion Solutions</h2>
                <p className='ml-6 text-gray-500 mt-3'>Every year , billions of dollars are spent <br /> in the world to cover...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

            <div className='relative shadow-xl  pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-5255e46a1e0a4ad881e9bdf817dd4b05.jfif' alt="" className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Steel Pipe Coating Rehabilitation</h2>
                <p className='ml-6 text-gray-500 mt-3'>The USA-based Polyguard company is <br /> a company that has been operating...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

            <div className='relative shadow-xl pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-0d806bb361234af4b2aed48e13a581db.jfif' alt='' className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Steel Pipe Coatings</h2>
                <p className='ml-6 text-gray-500 mt-3'>Our company with 30 years of <br /> experience in the steel pipe industry...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

            <div className='relative shadow-xl pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-fbde1734667a4156a565e9655305cae8.png' alt='' className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Baby Products</h2>
                <p className='ml-6 text-gray-500 mt-3'>Pandish has a wide range of nutritional <br /> accessories and derivative products...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

            <div className='relative shadow-xl pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-5984f91b3b6f4aeba3ddff6023ccc5ca.jpg' alt="" className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Medical Products</h2>
                <p className='ml-6 text-gray-500 mt-3'>We manufacture products with medical <br /> and implant compatibility...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

            <div className='relative shadow-xl pb-12 hover:red-500 rounded-b-lg hover:-translate-y-2 transition duration-500'>
              <img src='https://www.enkiticaret.com.tr/1/images/-cc2b3c6816944ef4b59a8132feb3d15b.png' alt='' className='bg-white w-100 h-64 rounded-t-lg' />
              <div className='bg-white pt-5'>
                <h2 className='ml-6 font-bold'>Zec Silicone Rubber</h2>
                <p className='ml-6 text-gray-500 mt-3'>Silicone rubber is an elastomer <br /> composed of silicone, carbon...</p>
                <div className="flex-1 border-b border-gray-300 pt-8" />
              </div>
            </div>

          </div >
        </div>
        {/*Contact Us */}
      </div>
        <div className='flex items-row justify-center my-40'>
          <div className='flex flex-wrap gap-x-40 justify-center lg:items-col-1 gap-y-20'>
            <div className='flex items-row '>
              <div className="w-1 h-40 bg-red-500 mr-4"></div>
              <div className=' items-col'>
                <h2 className='text-2xl font-bold' style={{textShadow:'20px 1px 20px rgba(0, 0, 0, 0.5)'}}>
                  We offer solutions that provide cost<br /> advantage with our <span className='text-red-500'>expert and<br /> experienced personnel</span> who have<br /> been working in the sector for a long<br /> time.
                </h2>
                <p className='text-gray-500 pt-6'>Our company has plans and initiatives to start its activities<br /> in different sectors.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className='font-bold text-gray-600'>CONTACT US!</h2>
              <AiOutlinePhone className='text-6xl text-red-500' />
              <h1 className='text-3xl font-bold text-red-500'>0 216 467 38 57</h1>
              <h3 className="text-sm text-gray-600 font-bold text-center my-10">Contact</h3>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}
