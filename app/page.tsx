import Header from '@/components/Header'
import React from 'react'
import { HeaderXl } from '@/components/HeaderXl'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import About from '@/components/About'
import ServicesSection from '@/components/Services'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeaderXl/>
      <HeroSlider/>
      <About/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}
