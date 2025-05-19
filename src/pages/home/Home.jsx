import React from 'react'
import Hero from './Hero'
// import MedicalInsight from './MedicalInsight'
import MedicalTeamSection from './MedicalTeamSection'
import ServicesSection from './ServicesSection'
import CareerCTASection from './CareerCTASection'

export default function Home() {
  return (
    <div>
        <Hero />
        {/* <MedicalInsight /> */}
        <MedicalTeamSection />
        <ServicesSection />
        <CareerCTASection />
    </div>
  )
}
