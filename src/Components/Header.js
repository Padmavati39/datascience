import React from 'react'

const Header = () => {
  const data=[
    {
        id:1,
        text: "Diploma Level 6 months intensive Training and Internship Program",
    },
    {
        id:2,
        text: "Working Professional Trainers from Statistics , Big Data and Machine Learning industrial experience",
    },
    {
        id:3,
        text: "With End to End Live Projects in Different industries and AI Domain",
    },
    {
        id:4,
        text: "Covers Machine Learning , Deep Learning , AI and Big Data",
    },
  ]
  return (
    <div class="pt-20">
      <div className='components'>
            <div className='box bg-sky-400' >

                <div className='content'>
                <ul>
                  <h1 className='text font-serif text-7xl text-center text text-white pt-10'>Data Science Program </h1>
                </ul>
                </div> 
                <div class="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 content-start p-8">
                  {data.map(({id,text})=>(
                    <div key={id} class="bg-white rounded-xl max-w-full p-5 h-56 flex justify-center items-center align-middle">
                      <p className='text font-serif content-center text-center text-xl '>{text}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
  )
}

export default Header