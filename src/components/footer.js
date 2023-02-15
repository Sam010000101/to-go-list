import React from "react";

function Footer() {
    return (
        <div className="flex flex-row w-full bg-slate-400 items-center justify-between p-6" >
            <h1 className="container mx-auto text-3xl md:text-2xl font-bold inline-block mr-4 py-2 whitespace-nowrap  text-white">A <em>Stars in a Jar</em> Production, 2023</h1>
            <a className="container mx-auto text-3xl md:text-2xl font-bold inline-block mr-4 py-2 whitespace-nowrap  text-white hover:underline cursor-pointer decoration-4" href="https://github.com/Sam010000101/to-go-list" target="_blank">Github</a>
        </div>
    )
}

export default Footer;