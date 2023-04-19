import React from 'react'

const ContactUs = () => {
  return (
    <section className='bg-[#F7F7F7] mt-10'>
    <div  className='max-w-screen-xl mx-auto '>
     <h1 className='text-4xl font-sans font-semibold section_title'>Contact Us</h1>
    <p className='text-center text-xl font-sans font-medium'>We are best among all the providers.Get 5 minutes from your time <br /> and have a discussion with us why we can serve you with best!  </p>


    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
        
    <article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/09/facebook-logo.png" alt="" className="w-16 h-16 mx-auto mt-4" />
				<div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans'>Facebook</h1>
					<h3 className="font-normal text-xl font-sans">Leave us a message on our Facebook page</h3>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4">SEND A MESSAGE</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/09/gmail.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans'>Email</h1>
					<h3 className="font-normal text-xl font-sans">Contact us via email anytime. We’re here!</h3>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4">EMAIL NOW</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/09/live-chat.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans'>Live Chat</h1>
					<h3 className="font-normal text-xl font-sans">Knock us anytime in our live chat</h3>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4">CHAT NOW</button>
				</div>
			</article>
			<article className="flex flex-col bg-white border rounded">
      <img src="https://digitavision.com/wp-content/uploads/2021/09/phone.png" alt="" className="w-16 h-16 mx-auto mt-4" />
      <div className="flex flex-col flex-1 p-6 text-center">
                    <h1 className='font-semibold text-xl font-sans'>Hotline</h1>
					<h3 className="font-normal text-xl font-sans">Call us between 10am – 12am everyday</h3>
                    <button type="button" className="px-14 py-3 font-bold rounded bg-red-600 text-gray-100 mt-4">CALL NOW</button>
				</div>
			</article>
        
    </div>
    
    </div>
</section>
  )
}

export default ContactUs