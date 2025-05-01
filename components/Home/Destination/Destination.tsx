import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/* Section heading */}
      <SectionHeading heading='Exploring Popular Destination' />

      {/* section content */}
        <div className="mt-4 w-[80%] mx-auto">
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination
