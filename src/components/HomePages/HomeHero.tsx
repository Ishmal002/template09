import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
// import foodpic1 from "/foodpic1.jpeg"
// import foodpic2 from "/foodpic2.jpeg"
// import foodpic3 from "/foodpic3.jpeg"
import { Button } from '../ui/button'

function HomePage() {
  return (
    <>
    <section className='bg-yellow-800 px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        
        <div className='text-white w-full sm:mt-8 tex md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-yellow-950 font whitespace-nowrap'>
    Its Quick & Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#af7723]'>Th</span>e Art of speed food Quality
  </h1>

  <p className='text-[10px] md:text-[16px] font-normal'>
  <br /><b>1.</b> The art of food quality lies in using fresh, premium ingredients for exceptional taste and nutrition.  
<br /><b>2.</b> Proper preparation and presentation enhance both the flavor and visual appeal of food.  
<br /><b>3.</b>Ensuring cleanliness and hygiene safeguards the quality and safety of every dish.  
<br /><b>4.</b> Attention to detail in cooking techniques brings out the best in every ingredient.  
<br /><b>5.</b> Consistency and care are key to delivering high-quality meals that delight every time.  
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>

 
  </div>
</div>

        

        <div className='mt-[50px] mx-10 md:mt-100 '>   
            <Image 
                src="/food.png"
                alt='Hero Image'
                width={700}
                height={500}
                className=''
            />

        </div>
    </section>
        <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]">
      

      




      
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#4b330f] font whitespace-nowrap font-greatVibes">
          About us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#ad7726]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
        <br /><b>1.</b> Welcome to[FOODIES], where passion meets flavor!  
<br /><b>2.</b> We specialize in crafting the **best foody products** to satisfy every taste.  
<br /><b>3.</b> With fresh ingredients and innovative recipes, our mission is to bring joy to your plate.  
<br /><b>4.</b> Our team of expert chefs and food enthusiasts ensures quality in every bite.  
<br /><b>5.</b> We prioritize health, flavor, and creativity in everything we create.  
<br /><b>6.</b> From gourmet meals to delicious snacks, we offer something for everyone.  
<br /><b>7.</b> Sustainability and freshness are at the heart of our food philosophy.  
<br /><b>8.</b> Each product is a reflection of our commitment to excellence and your satisfaction.  
<br /><b>9.</b> Join us in celebrating the art of delicious, wholesome food.  
<br /><b>10.</b> At [FOODIES], we don't just make food – we create experiences!  
        </p>

        

        <div className="flex flex-col md:flex-row items-center md:items-start">
         
        </div>
      </div>
      <div className="mt-[50px] md:mt-0 mx-4">
        <Image src="/foodpic1.jpeg" alt="Hero Image" className="h-[360px] sm:w-[660px] rounded-md" width={660} height={330} />
        <div className="flex flex-col md:flex-row gap-5 sm:flex-row mt-[16px] lg:mt-[45px] w-full justify-between">
          <Image src="/foodpic2.jpeg" width={400} height={200} alt="Hero Image" className="elative w-full sm:w-[280px] md:w-[390px] lg:w-[300px] h-[200px] mb-4 md:mb-0" />
          <Image src="/foodpic3.jpeg" width={400} height={200} alt="Hero Image" className="elative w-full sm:w-[280px] md:w-[390px] lg:w-[300px] h-[200px] mb-4 md:mb-0" />
        </div>
      </div>
    </section> 
    </>
  )
}

export default HomePage