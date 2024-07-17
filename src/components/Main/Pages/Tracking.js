import React from 'react'

export default function Tracking() {
  return (
   <section>
    
    <div className="bg-gray-50 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text */}
        <div>
          <h1 className="text-[56px] font-extrabold text-gray-900 mb-4">
            Automated <br /> portfolio tracking
          </h1>
          <p className="text-gray-600 mb-4">
            Yet bed any for travelling assistance indulgence unpleasing.
          </p>
          <p className="text-gray-600">
            Not thoughts all exercise blessing.
          </p>
        </div>
        
        {/* Right Section: Testimonial */}
        <div className="bg-gray-200 rounded-lg p-6 relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <img src="/image/quotation.png" alt="" />
          </div>
          <p className="text-gray-800">
            Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income.
            The expense windows adapted sir. Wrong widen.
          </p>
          <p className="text-gray-600 mt-4">
            - Mike Taylor, Web Designer
          </p>
        </div>
      </div>
    </div>
    {/* <div className='grid grid-cols-3 gap-3'>
        <div className='p-5 rounded-lg shadow-md bg-[#FFFFFF]'>
        <p>01</p>
        <h2 className='flex justify-center '>Connect wallets & companies</h2>
        <p className='flex justify-center'>Indulgence way everything joy alteration boisterous the attachment.
         Party we years to order allow asked of. </p>
        </div>
        <div className='bg-[#FFFFFF]'>02</div>
        <div className='bg-[#FFFFFF]'>03</div>
    </div> */}
    {/* <div></div> */}
   </section>
  )
}
