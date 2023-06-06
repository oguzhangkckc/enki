import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from './footer';
import Timeline from '../components/timeline';
import data from '../dummy/aboutUsItem.json';

export default function AboutUs() {

  const { aboutUsItemsLeft, aboutUsItemsRight } = data;

  return (
    <section id='about-us' >
      <div className="bg-white w-screen h-1/2 relative mt-20">
        <Navbar />
        <div>

          <div className=" justify-end bg-cover bg-center bg-no-repeat h-40" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1203189381/vector/world-map-illustration-on-beige-background.jpg?s=170667a&w=0&k=20&c=tWKrt5JfQq9TRdHAhfaOrwHnRbtzg8KfgRXKj04i6Qg=)` }}>
            <h1 className="flex text-black justify-center pt-10 text-4xl font-bold">About Us</h1>
          </div>
          {/* ABOUT US */}
          <div className='flex flex-row justify-center flex-wrap pt-8 gap-x-10'>
            <div className=''>
              <h2 className='text-2xl font-semibold'>About Us</h2>
              <p className='pt-3'>Enki İç ve Dış Tic. Paz. Dan.San Tic Ltd Şti started its activities in 2006 by getting the <br /> Turkish Representatives of the world's leading manufacturers in the fields of Powder<br /> Coating (FBE), Wet Paint, Polyethylene (HDPE, LDPE), Adhesive, Rehabilitation/Welding<br /> Zone Coatings and Pipe Transport/Storage/Handling for the Steel Pipe industry has<br /> begun. In the following process, Azerbaijan, Spain, Algeria and Morocco sales<br /> responsibilities on customer basis of these brands have also been added.<br />
                <br />
                Our company has successfully met the demands of Industrial Organizations serving<br /> projects both in Turkey and abroad, and has had the opportunity to show the<br /> performance of the products we represent.<br />
                <br />
                Enki entered the Silicone Rubber business in 2010. It has become a well-known and<br /> permanent company in this sector by incorporating expert personnel and collaborating<br /> with manufacturers who do not compromise on quality. Our products are sold under the<br /> brand "ZEC Silicone".<br />
                <br />
                With our expert and experienced personnel working in the sector for a long time, we<br /> answer the problems of many companies in technical terms and offer solutions that<br /> provide cost advantage.<br />
                <br />
                Our company has plans and initiatives to start its activities in different sectors. One of<br /> them is "silicone surgical drains" and the other is "silicone baby products".<br />
                <br />
                The mission of our company is to offer world brands, technology, knowledge and<br /> quality to the sectors we serve in the most suitable conditions and to create an added<br /> value in order to increase the competitiveness of our customers.<br /></p>
            </div>
            <div className=''>
              <img className="rounded-tl-extraLarge rounded-br-extraLarge pt-10" alt='' src="https://www.enkiticaret.com.tr/1/images/-43be487d918e4fcd95b4ba145565b157.png" />
            </div>
          </div>
          {/* ARA SÖZ */}
          <div className="flex justify-center items-center flex-col pt-32">
            <h2 className="text-center text-3xl font-semibold">
              With our expert <span className="text-red-500">solution partners</span><br />
              We are with you in every project together.
            </h2>
            <p className="text-center pt-5">
              The mission of our company is to offer world brands, technology, knowledge and quality to the sectors<br />
              we serve in the most suitable conditions and to create an added value in order to increase the<br />
              competitiveness of our customers.
            </p>
          </div>
          {/* TIMELINE */}
          <div className="flex align-center justify-center pt-32 gap-x-5">



            <div className='flex flex-col items-end gap-y-32'>
              <div className='flex flex-col gap-y-12 pt-8'>
                <h3 className='text-red-500 text-2xl flex pt-14 flex justify-end'>2006</h3>
                <h1 className='text-red-500 text-8xl font-extrabold pr-5'>enki</h1>
              </div>
              <h2 className='flex text-2xl font-semibold pt-12'>Beginning cooperation with <br /> KCC company(S.Korea)</h2>
              <Timeline data={aboutUsItemsLeft} />
            </div>

            <div className="flex flex-wrap border-l-2 h-[500vh] border-red-300 relative">
              {[...Array(14)].map((_, index) => (
                <div
                  key={index}
                  className="absolute flex items-center justify-center"
                  style={{ top: `${92 - (index * 90 / 13)}%` }}
                >
                  <div className="h-7 w-7 flex items-center justify-center bg-red-300 rounded-full absolute">
                    <div className="h-6 w-6 bg-white border-5 flex items-center justify-center absolute border-red-600 rounded-full">
                      <div className="h-3 w-3 bg-red-600 items-center justify-center rounded-full absolute" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex flex-col items-start gap-y-12'>
              <h2 className='text-2xl font-semibold pt-48'>Foundation</h2>
              <Timeline data={aboutUsItemsRight} />
            </div>

          </div>

        </div>
        <Footer />
      </div>
    </section >
  );
}
