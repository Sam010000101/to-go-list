import React from "react";

function Nav() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav id="nav" className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 bg-slate-400 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a className="text-3xl md:text-2xl font-bold inline-block mr-4 py-2 whitespace-nowrap  text-white" href="#">To-Go-List</a>
            <button className="text-white cursor-pointer px-3 py-1 block md:hidden outline-none focus:outline-none text-4xl" type="button" onClick={() => setNavbarOpen(!navbarOpen)}> ≡ </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#schedule">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#currency">Currency</a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#weather">Weather</a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#translator">Translator</a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#tips">Tips</a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-l  font-bold leading-snug text-white hover:underline decoration-4" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
)}

export default Nav;



 
