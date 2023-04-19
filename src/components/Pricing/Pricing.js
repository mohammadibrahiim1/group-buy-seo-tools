import React from 'react'

const Pricing = () => {
  return (
    <section className='bg-[#F7F7F7] mt-10'>
    <div  className='max-w-screen-xl mx-auto '>
     <h1 className='text-4xl font-sans font-semibold section_title'>SEO Tools Pricing</h1>
    <p className='text-center text-xl font-sans font-medium'>Always know what you’ll pay.</p>


    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
        
           <article className="flex flex-col bg-white border rounded p-4 hover:text-[#421A85]">
            <img src="https://digitavision.com/wp-content/uploads/2021/09/semrush-group-buy-bdseotools.png" alt="" className="mx-auto" />
				<div className="flex flex-col flex-1 text-center ">
                    <h1 className='font-medium text-2xl font-sans'>SEM**rsh</h1>
					<h3 className="font-bold text-5xl font-sans">৳492</h3>
                    <p className='mt-2'>Per user/month</p>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4 hover:bg-[#421A85]">BUY NOW</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded p-4 hover:text-[#8051FD]">
            <img src="https://digitavision.com/wp-content/uploads/2022/11/Ai-Content-Lab.png" alt="" className="mx-auto" />
               <div className="flex flex-col flex-1 text-center">
                    <h1 className='font-medium text-2xl font-sans'>Ai Content Lab</h1>
					<h3 className="font-bold text-5xl font-sans">৳656</h3>
                    <p className='mt-2'>Ai content & AI Image generation</p>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4 hover:bg-[#8051FD]">BUY NOW</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded p-4 hover:text-[#E05D89]">
            <img src="https://digitavision.com/wp-content/uploads/2021/10/surfer-seo-tool.png" alt="" className="mx-auto" />
              <div className="flex flex-col flex-1 text-center">
                    <h1 className='font-medium text-2xl font-sans'>SurferSEO</h1>
					<h3 className="font-bold text-5xl font-sans">৳1,025</h3>
                    <p className='mt-2'>Per user/month</p>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4 hover:bg-[#E05D89]">BUY NOW</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded p-4 hover:text-[#D232F9]">
            <img src="https://digitavision.com/wp-content/uploads/2021/10/jarvis-writing-tool-1.png" alt="" className="mx-auto" />
               <div className="flex flex-col flex-1 text-center">
                    <h1 className='font-medium text-2xl font-sans'>SurferSEO</h1>
					<h3 className="font-bold text-5xl font-sans">৳1,640</h3>
                    <p className='mt-2'>30K Words per month</p>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4 hover:bg-[#D232F9]">BUY NOW</button>
				</div>
			</article>
        
    </div>
    
    </div>
</section>
  )
}

export default Pricing