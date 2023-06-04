import React, { useEffect, useState } from 'react';
import Translation from '../../translation/Data.json'

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

  const [language, setLanguage] = useState('english');
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(Translation[language]);
  }, [language]);

  return (
    <nav className="fixed top-0 w-full z-50" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-red-500 text-6xl font-extrabold">enki</h1>
          </div>

          <div className="">
            <ul className="flex items-center font-bold space-x-8 text-base text-xl hidden md:flex">
              <li className="relative">
                <a href="/" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  {content.home}
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/about-us" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  {content.aboutUs}
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/industries" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  {content.industries}
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
              <li className="relative">
                <a href="/contact" className="text-black hover:text-red-500 transition duration-500 hover-underline-left-to-right">
                  {content.contact}
                  <span className="underline absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              className="text-black font-semibold bg-transparent border border-white rounded-md py-2 px-4 focus:outline-none"
            >
              <option value="english">English</option>
              <option value="türkçe">Türkçe</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
