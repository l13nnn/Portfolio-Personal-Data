import React, { useEffect, useRef } from 'react';
import '../styles/Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import Dessert from '../assets/Screenshot 2025-03-27 101607.png';
import Movie from '../assets/Screenshot 2025-03-27 103304.png';
import Post from '../assets/Screenshot 2025-03-27 104307.png';
import User from '../assets/Screenshot 2025-03-27 104900.png';
import MovieSection from '../assets/large_12_e0320e6ae9.webp';
import Marketplace from '../assets/Empire-Flippers-an-online-business-marketplace-1024x564.webp';
import News from '../assets/news-website.webp';

function Projects() {

    const cardsRef = useRef([]);

    useEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 }, 
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-section', 
                    start: 'top center', 
                    end: 'bottom center', 
                    toggleActions: 'play none none none', 
                },
            }
        );
    }, []);

    return (
        <div className='projects-section'>
            <div className='projects-header'>
                <h1>Projects</h1>
            </div>
            <div className='projects-swiper'>
                <Swiper
                    style={{ width: '100%', maxWidth: '1200px' }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className='swiper-slide'>
                        <h1>Dessert Shop</h1>
                        <img src={Dessert} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide-movie'>
                        <h1>Movie Collection</h1>
                        <img src={Movie} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide-post'>
                        <h1>Post Management App</h1>
                        <img src={Post} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide'>
                        <h1>User Management</h1>
                        <img src={User} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide-section'>
                        <h1>Movie Section</h1>
                        <img src={MovieSection} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide'>
                        <h1>Marketplace</h1>
                        <img src={Marketplace} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide'>
                        <h1>News</h1>
                        <img src={News} />
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )

}

export default Projects;