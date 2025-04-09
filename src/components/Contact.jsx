import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import Photo from '../assets/Foto__3_-removebg-preview.png';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Contact() {

    const form = useRef();
    const textRef = useRef(); 
    const containerRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ikz8wae', 
            'template_nvmvl6o', 
            form.current,
            'I39mwirA2PoRu3o4N' 
        )
        .then((result) => {
            alert('Pesan berhasil dikirim!');
        }, (error) => {
            alert('Terjadi kesalahan, coba lagi.');
        });
    };

    useEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 }, 
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current, 
                    start: 'top 80%', 
                    toggleActions: 'play none none none', 
                },
            }
        );

        gsap.fromTo(
            containerRef.current,
            { opacity: 0 }, 
            {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current, 
                    start: 'top 90%', 
                    toggleActions: 'play none none none', 
                },
            }
        );
    }, []);

    return (
        <div className='contact-section' ref={containerRef}>
            <div className='contact-image'>
                <img src={Photo} />
            </div>
            <div className='contact-container'>
                <h1 ref={textRef}>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact-name'>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" />
                    </div>
                    <div className='contact-email'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className='contact-message'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" />
                    </div>
                    <button type="submit" className='contact-button'>Send</button>
                </form>
                <div className='contact-text'>
                    <p>Contact</p>
                    <p>Phone: 0857-7232-0060</p>
                    <p>Email: irenedjaya288@gmail.com</p>
                    <p>Based in Jakarta, Indonesia</p>
                </div>
                <div className='contact-link'>
                    <a href="https://www.tiktok.com/@iilennaa?_t=ZS-8v1cjHvnWcb&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
                    <a href="https://x.com/chieee_marx?t=P7ZDOVo2ALMji3DrzpRhzQ&s=09" target="_blank" rel="noopener noreferrer">X</a>
                    <a href="https://www.instagram.com/liennn.n_?igsh=YTc0ZjA0cG1ibnVi" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    )

}

export default Contact;