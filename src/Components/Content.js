import React, { Component } from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

export class Content extends Component {
  render() {
    return (
    <div>
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-2'>
          <div className=' max-w-full mx-3 sm:mx-12 md:mx-auto lg:mx-3 xl:mx-auto xl:w-11/12'>
            <img src="Images\img.png" alt="Brochure" />
          </div>
          <div className='mt-28 h-auto mx-4 sm:mx-12 md:mx-auto lg:mx-3 xl:mx-auto'>
              <p className=' font-serif text-slate-900 text-4xl'> Hurry up !<br/> Land Your Dream Data Science Job. </p>
              <ul className=' list-disc list-inside'>
                <li className='text-2xl mt-4'>Flexible Timing</li>
                <li className='text-2xl mt-2'>Recorded Sessions</li>
                <li className='text-2xl mt-2'>Online/Offline Mode</li>
              </ul>
              <div className=' mt-16 inline-block'>
                <a href='/Brochure/Data_Science_Syllabus.pdf' download target='_blank' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Download Brochure
                    <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/>
                    </span>
                </a>
              </div>
              <div className=' inline-block'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScM5OvAY84ik1kt3GXaCRQH6Bg0zOrMsmVKoOizCQcIrovLgA/viewform' target='_blank' className='group mx-4 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Register Here
                </a>
              </div>
          </div>
        </div>
    </div> 
    )
  }
}

export default Content