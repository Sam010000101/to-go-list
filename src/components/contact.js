import React from "react";

function Contact() {
    return (
        <div id="contact" className="container mx-auto bg-slate-400 rounded-xl">
        <h2>Get in Touch</h2>
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
            </p>
            <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
            </p>
            <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
            </p>
            <p>
                <input className="p-6 bg-blue-400 cursor-pointer" type="submit" value="Submit message" />
            </p>
            </form>
        </div>
      );
}

export default Contact;
