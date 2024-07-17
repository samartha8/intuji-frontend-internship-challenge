import React from 'react'
import AboveFold from './AboveFold'
import Counts from './Counts'
import Features from './Features'
import Payments from './Payments'
import HeroSection from './HeroSection'
import SaveMoney from './SaveMoney'
import Tracking from './Tracking'
import Testimonials from './Testimonials'
import UserInteraction from './UserInteraction'
// import RecentBlogs from './RecentBlogs'
// import FAQs from './FAQs'
export default function Main() {
  return (
   <>
   <HeroSection/>
  <AboveFold/>
  <Tracking/>
   <Payments/>
   <SaveMoney/>
   <Features/>
   <UserInteraction/>
   <Testimonials/>
   {/* <RecentBlogs/> */}
   {/* <FAQs/> */}
   <Counts/>
   
   </>
  )
}
