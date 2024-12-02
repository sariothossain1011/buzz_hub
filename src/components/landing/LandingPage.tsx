import React from 'react'
import OfferSell from './OfferSell'
import FeaturesProducts from './FeaturesProducts'

const LandingPage = () => {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <OfferSell/>
      <FeaturesProducts/>
    </div>
  )
}

export default LandingPage