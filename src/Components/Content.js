import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
    <div>
        <div className='grid grid-cols-2 ' >
          <div className=' mt-10 w-4/5 ml-36 mr-auto'>
            <img src="Images\img.png" alt="Brochure" />
          </div>
          <div className=' m-40 h-auto  '>
            <p className=' font-serif text-slate-900 text-4xl'> Hurry up ! Land Your Dream Data Science Job. </p>
          </div>
        </div>
    </div> 
    )
  }
}

export default Content