import React from 'react'

const Counter = () => {
  return (
    <section className='bg-[#F7F7F7] mt-10'>
        <div  className='max-w-screen-xl mx-auto '>
         <h1 className='text-4xl font-sans font-semibold section_title'>Why We Are the Best among all Providers</h1>
        <p className='text-center text-xl font-sans font-medium'>When selling a product, we see only one thing. That is Customer Convenience. We provide the best service and we only keep low users per account so that user doesn’t face any problem.</p>


        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
			
            <div className='bg-[#1E90FF] text-center rounded py-5 text-white '>
                <h1 className='font-bold font-sans text-5xl'>2000+</h1>
                <h5 className='font-normal font-sans text-xl'>Active Customers</h5>
            </div>
            <div className='bg-[#EEB712] text-center rounded py-5 text-white'>
            <h1 className='font-bold font-sans text-5xl'>70+</h1>
                <h5 className='font-normal font-sans text-xl'>Premium Tools</h5>
            </div>
            <div className='bg-[#FF5462] text-center rounded py-5 text-white'>
            <h1 className='font-bold font-sans text-5xl'>6+</h1>
                <h5 className='font-normal font-sans text-xl'>Years in Service</h5>
            </div> 
            <div className='bg-[#37D679] text-center rounded py-5 text-white'>
            <h1 className='font-bold font-sans text-5xl'>99%</h1>
                <h5 className='font-normal font-sans text-xl'>Satisfaction Rate</h5>
            </div>
		</div>
        </div>
  </section>
  )
}

export default Counter