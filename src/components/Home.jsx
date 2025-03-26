import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typed from 'typed.js';
import '../styles/Home.css';
import Logo from '../assets/WhatsApp_Image_2025-03-25_at_10.37.33_4e0b2ad2-removebg-preview.png';
import Photo from '../assets/Foto__3_-removebg-preview.png';

function Home() {
    const logoContainer = useRef(null);
    const descriptionContainer = useRef(null);
    const imageContainer = useRef(null);
    const typedTextRef = useRef(null);

    useEffect(() => {        
        gsap.fromTo(logoContainer.current, {
            duration: 0.2,
            opacity: 0,
            y: -50,
            ease: 'power2.out',
        },{
            opacity: 1,
            y: 0
        });

        gsap.fromTo(descriptionContainer.current, {
            duration: 0.2,
            opacity: 0,
            x: 50,
            ease: 'power2.out',
        },{
            opacity: 1,
            x: 0
        });

        gsap.fromTo(imageContainer.current, {
            duration: 0.2,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.out',
        },{
            opacity: 1,
            scale: 1
        });

        const options = {
            strings: ["Front-end Developer", "Web Designer", "Creative Coder"], 
            typeSpeed: 70, 
            backSpeed: 40, 
            backDelay: 1000, 
            loop: true 
        };

        const typed = new Typed(typedTextRef.current, options);

        return () => {
            typed.destroy(); 
        };
    }, []);

    return (
        <div className="home-section">
            <div className='home-header'>
                <div className='logo-text-container' ref={logoContainer}>
                    <img className="home-image-1" src={Logo} />
                    <h1>Coquette</h1>
                </div>
                <div className='home-nav'>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div className='home-container'>
                <div className='home-description' ref={descriptionContainer}>
                    <div className='home-desc-text'>
                        <span ref={typedTextRef} />
                    </div>
                    <div className='home-desc-text-1'>
                        <h1>Hello, my name <br /> is Irene Djaya</h1>
                    </div>
                    <div className='home-desc-text-2'>
                        <p>I love chocolate, coding, and designing. I have <br /> plan to develope my English and Chinese skills. <br /> Furthermore, I am eager to delve deeper into the <br /> world of coding and design, learning advanced techniques <br />and exploring new tools to enhance my expertise in these fields.</p>
                    </div>
                    <div className='home-button'>
                        <button>View Portfolio</button>
                    </div>
                </div>
                <div className='home-image' ref={imageContainer}>
                    <img src={Photo} />
                </div>
            </div>
        </div>
    );
}

export default Home;