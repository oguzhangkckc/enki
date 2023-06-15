import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from './footer'
import Sidebar from '../components/sideBar'

export default function Industries() {

  return (
    <div>
      <Navbar />
      <div className="bg-white w-screen h-1/2 relative mt-20">

        {/* HEADER */}
        <div className=" justify-end bg-cover bg-center bg-no-repeat h-40" style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20210827/pngtree-curve-color-block-watercolor-splash-beige-background-image_771090.jpg)` }}>
          <h1 className="flex text-black justify-center pt-10 text-3xl font-semibold">Industries</h1>
        </div>

        {/* MAIN */}
        <div className='flex items-row pt-12'>

          <div className=''>
            <Sidebar />
          </div>

          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
