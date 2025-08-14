import React from 'react'
import HeroSection from '../components/hero/Hero'
import ServicesSection from '../components/our-services/OurServices'
import AboutUs from '../components/about-us/AboutUs'
import WhyUs from '../components/why-us/WhyUs'
import AreYouReady from '../components/are-you-ready/AreYouReady'

const Home = () => {
  return (
      <>
      <HeroSection />
          <ServicesSection />
          <AboutUs />
          <WhyUs />
          <AreYouReady />
      </>
  )
}

export default Home