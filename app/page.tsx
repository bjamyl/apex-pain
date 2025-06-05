import Header from '@/components/Header'
import React from 'react'
import { HeaderXl } from '@/components/HeaderXl'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeaderXl/>
      <HeroSlider/>
      <Footer/>
    </div>
  )
}
