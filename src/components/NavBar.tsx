import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const title: string = "CBHub"

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
      <div className="flex items-center justify-between  text-slate-50 sticky top-0 bg-slate-950 py-8">
        <h1 className="text-2xl pl-4">{title}</h1>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 mr-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
  
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >  
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] text-slate-50">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                 <NavLink to="/releases" end>
                  <a href="/portfolio">New Comics</a>
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Browse</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                <a href='/login'>Login</a>
            </li>
              </ul>
            </div>
          </section>
  
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-slate-50 pr-20">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">New Comics</a>
            </li>
            <li>
              <a href="/contact">Browse</a>
            </li>
            <li>
                <a href='/login'>Login</a>
            </li>
          </ul>
        </nav>
        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #111827;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
      </div>
    );
  }

export default NavBar