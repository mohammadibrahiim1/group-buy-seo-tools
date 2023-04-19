import React from 'react'

const AboutUs = () => {
  return (
    <section className='bg-[#F7F7F7] mt-10'>
        <div className=' max-w-screen-xl mx-auto '>
        <h1 className='text-4xl font-sans font-semibold section_title'>Who we are?</h1>
        <p className=' text-xl font-sans font-normal text-[#62686E] mt-6'>DigitalVision is the first Group Buy SEO Tools company in Bangladesh established in 2017. We are providing the most usable 55+ SEO Tools where you can find all of your SEO, Graphics, Content, Amazon and Marketing Solutions.</p>

        <p className='text-xl font-sans font-normal text-[#62686E] mt-10'>The concept of getting our clients the best quality is what keeps us on the right track and makes us deliver the best service. When you pitch or a service, business, or an idea to us, we analyze the opportunities with you regarding the idea. Our expert team will research the topic in-depth and develop a killer strategy specifically for your needs.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mt-10  max-w-screen-xl mx-auto">
        
        <article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/08/hvac-icon-015.png" alt="" className="w-16 h-16 mx-auto mt-4" />
				<div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans text-red-600'>Trusted</h1>
					<h3 className="font-normal text-xl font-sans">Leave us a message on our Facebook page</h3>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/08/hvac-icon-016.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans text-red-600'>Fair Prices</h1>
					<h3 className="font-normal text-xl font-sans">Contact us via email anytime. We’re here!</h3>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/08/hvac-icon-017.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans text-red-600'>Fast & Responsive</h1>
					<h3 className="font-normal text-xl font-sans">Knock us anytime in our live chat</h3>
				</div>
			</article>
		<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/08/hvac-icon-018.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans text-red-600'>Satisfaction Guaranteed</h1>
					<h3 className="font-normal text-xl font-sans">Call us between 10am – 12am everyday</h3>
				</div>
		</article>
        
    </div>

    </section>
  )
}

export default AboutUs