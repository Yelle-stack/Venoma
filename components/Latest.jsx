import Link from 'next/link';
import React from 'react'
import Slider from './Slider';

const Latest = () => {
  return (
    <section className='mt-24'>
      <div className="container mx-auto">
        <div className='flex justify-between items-end mb-18'>
          <h4 className='h4 w-max border-b-2'>Explore Our Latest Collection</h4>
          <Link href="/"
          className='link-primary text-accent2 hover:text-primary'>
          View All
          </Link>
        </div>
        {/* slider */}
        <Slider/>
      </div>
    </section>
  )
};

export default Latest;
