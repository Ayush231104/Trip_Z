import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20'>
        {/* Section heading */}
      <SectionHeading heading='Exploring Popular Destination' subTitle='Discover breathtaking places around the world,
handpicked for your perfect getaway.'/>

      {/* section content */}
        <div className="mt-4 w-[80%] mx-auto">
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination
