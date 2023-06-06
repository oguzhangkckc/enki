import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from './footer'

export default function industries() {

  return (
    <div>
      <Navbar />
      <div className="bg-white w-screen h-1/2 relative mt-20">

        {/* HEADER */}
        <div className=" justify-end bg-cover bg-center bg-no-repeat h-40" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1203189381/vector/world-map-illustration-on-beige-background.jpg?s=170667a&w=0&k=20&c=tWKrt5JfQq9TRdHAhfaOrwHnRbtzg8KfgRXKj04i6Qg=)` }}>
          <h1 className="flex text-black justify-center pt-10 text-3xl font-semibold">Industries</h1>
        </div>

        {/* MAIN */}
        <div className='flex items-row pt-12'>

          <div className="relative">
            <div >
              <ul>
                <li>
                  <div>
                    Steel Pipe Coatings
                  </div>
                  <ul className='hidden'>
                    <li>KCC Fusion Bonded Epoxy Coating (FBE)</li>
                    <li>Industrie Polieco-M.P.B. Polyolefin Coatings</li>
                    <li>Enri Silicone Rollers and Wheels</li>
                    <li>Temperature Resistand Polyester Tapes</li>
                  </ul>
                </li>
                <li>
                  <div>
                    Steel Pipe Protection
                  </div>
                  <ul className='hidden'>
                    <li>Bevel Protection</li>
                    <li>Pipe Closure</li>
                  </ul>
                </li>
                <li>
                  <div>
                    Steel Pipe Coating Rehabilitation
                  </div>
                  <ul className='hidden'>
                    <li>Underground Pipes: Polyguard RD-6</li>
                    <li>Onground Pipelines</li>
                  </ul>
                </li>
                <li>
                  <div>
                    Industrial Corrosion Protection
                  </div>
                  <ul className='hidden'>
                    <li>Polyguard RG2400 Technology</li>
                    <li>Weather Proof Jacketing</li>
                    <li>Water And Moisture Barriers</li>
                  </ul>
                </li>
                <li>
                  <div>
                    ZEC Silicone Rubbers
                  </div>
                  <ul className='hidden'>
                    <li>What Is  Silicone Rubbers?</li>
                    <li>Types Of Silicone Rubbers?</li>
                    <li>ZEC Silicone Product Groups</li>
                    <li>Application Of Silicone Rubbers In Industry</li>
                  </ul>
                </li>
                <li>
                  <div>
                    Medical Products
                  </div>
                  <ul className='hidden'>
                    <li>EDDA Medical Products</li>
                    <li>Catalogues</li>
                    <li>Certificates</li>
                  </ul>
                </li>
                <li>
                  <div>
                    Baby Products
                  </div>
                  <ul className='hidden'>
                    <li>CAT Products</li>
                    <li>PANDISH Products</li>
                  </ul>
                </li>
              </ul>
            </div>
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
