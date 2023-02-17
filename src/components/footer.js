import React from "react";

function Footer() {
    return (
        <div id="footer" className=" w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[#025]">
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="https://github.com/Sam010000101/to-go-list">Github</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#nav">Back to Top</a>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-l font-itim text-xl leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3">A Stars in a Jar Creation, 2023</p>
              </li>
            </ul>
        </div>
    )
}

export default Footer;