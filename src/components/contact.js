import React from "react";

function Contact() {
    return (
        <div id="contact" className="container mx-auto rounded-xl mb-8">
         <span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
                <span className="font-itim relative text-blue-200 font-bold leading-6">Get in Touch</span>
                <span className="inset-y-0 flex flex-col pl-2 pt-1 relative">
                    <svg className="h-5 w-5 pb-1 fill-slate-300" viewBox="0 0 31.982 31.982">	<path d="M3.952,23.15L0,31.955l8.767-3.992l0.018,0.019L3.938,23.13L3.952,23.15z M4.602,22.463L24.634,2.432l4.849,4.848 L9.45,27.312L4.602,22.463z M30.883,0.941c-2.104-1.963-4.488-0.156-4.488-0.156l4.851,4.843 C31.244,5.627,33.124,3.375,30.883,0.941z" /></svg>
                </span>
            </span>
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p className="m-4">
                <label className="mr-4" htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name"/>
            </p>
            <p className="m-4">
                <label className="mr-4" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email"/>
            </p>
            <p className="m-4"> 
                <textarea id="message" name="message" required placeholder="Enter your message"></textarea>
            </p>
            <p>
                <input className="rounded-full bg-[#025] p-2 font-itim hover:text-yellow-300 hover:underline decoration-wavy decoration-3 text-blue-200 cursor-pointer" type="submit" value="Submit message" />
            </p>
            </form>
        </div>
      );
}

export default Contact;
