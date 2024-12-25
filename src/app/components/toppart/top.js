import Image from 'next/image'
import React from 'react'
import bg from '../media/bgimg.webp'
import bg2 from '../media/IMG-20231104-WA0142-300x420.jpg'
import icon1 from '../media/megamog_box_01-1.png'
import icon2 from '../media/megamog_box_02-1.png'
import icon3 from '../media/megamog_box_03-1.png'
import icon4 from '../media/megamog_box_04-1.png'
import '../toppart/top.css'

const Top = () => {
  return (
    <div className='top'>
      <div className='topimg relative'>
        <Image src={bg} />
        <div className='absolute  text-white bottom-24 left-16'>
          <p className='text-xl  font-bold pb-2 '>Pilot collections</p>
          <p className='text-3xl font-bold pb-2 '>New Exquisite</p>
          <button className='cursor-pointer bg-black ml-8 p-2 rounded font-bold text-lg '>Order Now</button>
        </div>
      </div>

      <div className='second'>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
      </div>

    <div className='third py-2 px-2 '>
      <div className='hover:transform relative hover:scale-4 pb-2'>
        <Image src={bg2}/>
        <div className='absolute top-8 left-4 text-white pb-4'>
        <h1 className='font-bold text-3xl'>Classic Vibes</h1>
        <p className='text-xl'>New Collections</p>
        </div>
        
      </div>
      <div className='hover:transform relative hover:scale-4 pb-2'>
        <Image src={bg2}/>
        <div className='absolute top-8 left-4 text-white pb-4'>
        <h1 className='font-bold text-3xl'>Classic Vibes</h1>
        <p className='text-xl'>New Collections</p>
        </div>
        
      </div>
      <div className='hover:transform relative hover:scale-4 pb-2'>
        <Image src={bg2}/>
        <div className='absolute top-8 left-4 text-white pb-4'>
        <h1 className='font-bold text-3xl'>Classic Vibes</h1>
        <p className='text-xl'>New Collections</p>
        </div>
        
      </div>

    </div>

    <div className='pt-12 px-4'>
      <h2 className='font-semibold text-sm pb-2 text-center'>HIGHLIGHTED PRODUCT OF THE YEAR</h2>
      <h1 className='font-bold text-2xl text-center'>BEST SELLING</h1>
      <div class="w-32 h-2 mx-auto mt-1 border-t-4 border-black"></div>
      <div className='bestcard'>
      <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
        <div className='card '>
          <Image src={bg} />
          <div className='text-gray-700'>
            <p className='text-sm  font-bold pb-2 text-center'>Bmc X Frank Pilot collections</p>
          </div>
        </div>
      </div>
    </div>

    <div className='p-4 last flex items-center gap-2'>
      <div className=''>
        <Image className='ml-4 mb-6 ' src={icon1}/>
        <p className='mx-auto line-2 text-md font-semibold text-center'>Flexible Shipping</p>
      </div>
      <div className=' '>
        <Image className='ml-4 mb-6 ' src={icon2}/>
        <p className='mx-auto line-2 text-center text-md font-semibold'>Exquisite Cut</p>
      </div>
      <div className=' '>
        <Image className='ml-4 mb-6' src={icon3}/>
        <p className='mx-auto line-2 text-md font-semibold text-center'>Online Support</p>
      </div>
      <div className=' '>
        <Image className='ml-4 mb-6' src={icon4}/>
        <p className='mx-auto line-2 text-md font-semibold text-center'>Secure Payment</p>
      </div>

    </div>
    </div>
  )
}

export default Top
