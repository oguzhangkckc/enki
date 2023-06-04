import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.hover-underline-left-to-right');

    links.forEach((link) => {
      link.addEventListener('mouseenter', function () {
        const underline = this.querySelector('.underline');
        if (underline) {
          underline.style.width = '100%';
        }
      });

      link.addEventListener('mouseleave', function () {
        const underline = this.querySelector('.underline');
        if (underline) {
          underline.style.width = '0%';
        }
      });
    });
  }, []);

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-red-500 text-6xl font-extrabold">enki</h1>
          </div>

          <div className="">
            <ul className="flex items-center font-bold space-x-8 text-base text-xl hidden md:flex">
              <li className="relative">
                <a href="/" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  Home
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/about-us" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  About Us
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/industries" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  Industries
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/contact" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  Contact
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
