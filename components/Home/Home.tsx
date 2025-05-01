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
      <section id="destination" className="scroll-mt-10">
        <Destination />
      </section>
      <section id="hotel" className="scroll-mt-10">
        <Hotel />
      </section>
      <section id="whychoose" className="scroll-mt-10">
        <WhyChoose />
      </section>
      <section id="review" className="scroll-mt-10">
        <Reviews />
      </section>
      <section id="news" className="scroll-mt-10">
        <News />
      </section>
      <section id="newsletter" className="scroll-mt-10">
        <NewsLetter />
      </section>
    </div>
  )
}

export default Home
