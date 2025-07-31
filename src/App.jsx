import React from 'react'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import ServicesSection from './components/our-services/OurServices'
import AboutUs from './components/about-us/AboutUs'
import HeroSection from './components/hero/Hero'
import WhyUs from './components/why-us/WhyUs'
import AreYouReady from './components/are-you-ready/AreYouReady'

const App = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <WhyUs />
      <AreYouReady />
        <Footer />
      </div>
    </>
    
  )
}

export default App