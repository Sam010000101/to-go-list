import React from "react";

function Nav() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav id="nav" className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-[#025]">
        <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a className="text-3xl md:text-2xl font-bold inline-block mr-3 py-2 whitespace-nowrap font-itim text-[#add8e6] lowercase" href="#">To-Go-List</a>
            <button className="text- cursor-pointer px-3 py-1 block md:hidden outline-none focus:outline-none text-4xl" type="button" onClick={() => setNavbarOpen(!navbarOpen)}> ≡ </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#schedule">Schedule</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#currency">Currency</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#weather">Weather</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#translator">Translator</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#tips">Tips</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
)}

export default Nav;