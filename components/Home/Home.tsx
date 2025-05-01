'use client';

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS();
  },[])

  return (
    <div className='overflow-hidden'>
      <section id="hero">
        <Hero />
      </section>
      <section id="destination" className="scroll-mt-3">
        <Destination />
      </section>
      <section id="hotel" className="scroll-mt-3">
        <Hotel />
      </section>
      <section id="whychoose" className="scroll-mt-3">
        <WhyChoose />
      </section>
      <section id="review" className="scroll-mt-3">
        <Reviews />
      </section>
      <section id="news" className="scroll-mt-3">
        <News />
      </section>
      <section id="newsletter" className="scroll-mt-3">
        <NewsLetter />
      </section>
    </div>
  )
}

export default Home
