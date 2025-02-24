'use client'

import { useState } from "react";

export default function ContactForm () {
    const [contactForm, setContactForm] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        console.log('e', e)
        const {value, name} = e.target;
        setContactForm({
            ...contactForm,
            [name]: value
        })
    }
    return (
            <form
                className="rounded-xl border-2 boder-[#f139bb] bg-black w-full md:w-3/5 py-8 px-12"
                action="https://formspree.io/f/xjkgqrvn"
                method="POST"
            >

                <div className="mb-5">
                    <label className="text-white block mb-2 text-sm font-medium">Your email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={contactForm.email} onChange={handleChange}
                        className="border border-gray-300 text-sm text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" 
                        placeholder="name@domain.com"
                        required 
                    />
                </div>
                <div className="mb-5">
                    <label className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea 
                        placeholder="Looking forward to connecting with you!"
                        id="message" 
                        name="message" 
                        value={contactForm.message} 
                        onChange={handleChange}
                        className="border border-gray-300 text-sm text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" 
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="border-[#f139bb] border-2 text-[#f139bb] hover:bg-[#f139bb] hover:text-white focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                
                {/* <label>
                    Your email:
                    <input type="email" name="email" value={contactForm.email} onChange={handleChange}/>
                </label>
                <label>
                    Your message:
                    <textarea name="message" value={contactForm.message} onChange={handleChange}></textarea>
                </label>
                {/* <!-- your other form fields go here --> */}
                {/* <button type="submit">Send</button> */}
            </form>

    )
}