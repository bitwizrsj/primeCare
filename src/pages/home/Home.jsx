import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import ServicesSection from './ServicesSection'
import ResourcesSection from './ResourcesSection'
import StudentServicesSection from './StudentServicesSection'
import InfiniteImageScroll from './InfiniteImageScroll'

export default function Home() {
  return (
    <div>
        <Hero />
        <Hero2 />
        <ServicesSection />
        <ResourcesSection />
        <StudentServicesSection />
        <InfiniteImageScroll />
    </div>
  )
}