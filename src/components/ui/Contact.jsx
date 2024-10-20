import React, { useState, useEffect, useRef } from 'react';
import { send } from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cont",
                start: "top 90%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".cont", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.6
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        send('service_9ajrmrn', 'template_dzfbumi', templateParams, 'D_WRKHzG1qGR0U-8D')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Failed to send email. Error: ', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='cont relative'>
            <div className='flex flex-col mt-20' style={{ fontFamily: "Poppins" }}>
                <h1 className='m-0 p-0 lg:text-8xl text-5xl dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                    GET IN<br />
                    <span className='text-[#353334] m-0 p-0'>TOUCH</span>
                </h1>
            </div>
            <form className='flex w-full flex-col gap-5 mt-10' style={{ fontFamily: "Poppins" }} onSubmit={sendEmail}>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex gap-2 flex-col w-full'>
                        <span className='text-sm text-[#998F8F]'>Name</span>
                        <input
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='dark:bg-[#343335] text-black dark:text-white p-2 rounded-lg w-full border-2 dark:border-transparent focus:border-[rgb(244,108,56)] focus:outline-none'
                            placeholder='Your name'
                            type="text"
                            required
                        />
                    </div>
                    <div className='flex gap-2 flex-col w-full'>
                        <span className='text-[#998F8F] text-sm'>Email</span>
                        <input
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='dark:bg-[#343335] text-black dark:text-white p-2 rounded-lg w-full border-2 dark:border-transparent focus:border-[rgb(244,108,56)] focus:outline-none'
                            placeholder='Your email'
                            type="email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <span className='text-[#998F8F] text-sm'>Message</span>
                    <textarea
                        name='message'
                        value={formData.message}
                        
                        onChange={handleChange}
                        className='dark:bg-[#343335] text-black dark:text-white p-2 rounded-lg w-full border-2 dark:border-transparent focus:border-[rgb(244,108,56)] focus:outline-none'
                        placeholder='Message'
                        required
                    ></textarea>
                </div>
                <button

                    className='w-full text-white rounded-lg p-2 mt-4'
                    style={{ backgroundColor: "rgb(244, 108, 56)" }}

                >
                    {loading ? "Loading...🚀" : submitted ? "Sent! 🎉" : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Contact;