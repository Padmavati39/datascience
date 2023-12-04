import React from 'react'

const AnimatedCards = () => {
    const data = [
        {
            title: 'Course Overview',
            points: [
              'Covers Machine Learning, Deep Learning, AI & Big Data',
              'Working Professional Trainers from Statistics, Big Data, and machine learning industrial experience',
              'With End to End Live Projects in Different industry, AI Domains'
            ]
          },
          {
            title: 'Why Learn Data Science?',
            points: [
              'A part of all industries and getting adopted in more areas',
              'This has made many of current jobs absolute and opened new job opportunities.',
              'Now is the right time to start learning Data Science.',
              'Even if you are a fresher or working professional, you will be soon working in project work related to Data Science.',
              'It is the most researched and challenging, creative field.',
              'And it is a stable, better career choice as of today for new jobs.'
            ]
          },
          {
            title: 'Who Can Join?',
            points: [
              'Any Graduate',
              'Good Aptitude and Reasoning Skills',
              'Programming or Stat Experience not required, we teach from basics'
            ]
          },
          {
            title: 'Different Jobs Available',
            points: [
              'Data Scientist',
              'Data Analyst',
              'Machine Learning Engineer',
              'Deep Learning Engineer',
              'Business Analytics Professional',
              'Research Analyst',
              'Natural Language Processing Specialist',
              'Computer Vision Specialist',
              'Excel VBA Analyst',
              'Database Administrator'
            ]
          },
          {
            title: 'Analytics Areas/Project Cases',
            points: [
              'Customer Experience',
              'Sales Analytics',
              'Marketing Analytics',
              'Operational Analytics',
              'Network Analytics',
              'Web Analytics',
              'Financial Analytics',
              'Stock Market',
              'Log Analytics',
              'Service Desk, Tickets Analytics',
              'HR Analytics'
            ]
          },
          {
            title: 'Admission Process',
            points: [
              'The Certification Program in Data Science is ideal for students and professionals who are interested in working in the analytics industry and are keen on enhancing their technical skills with exposure to cutting-edge practices.',
              'Eligibility: Any Graduate and Professional',
              'Enrollment Form link: https://forms.gle/bQwTSTaMMkUjCW2e6',
              'Select Data Science Certification Program'
            ]
          }
    ]
  return (
    <div className='grid grid-cols-3'>
        {data.map(({id,title,points})=>(
            <div className="flex min-h-screen flex-col justify-center bg-slate-100">
            <div className="group h-96 w-96 [prespective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute insert-0 h-full w-full [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className='text-3xl'>{title}</h1>
                        </div>
                    </div>
                    <div className="absolute insert-0 h-auto w-full rounded-xl bg-sky-400 px-12 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                        <ul className='list-disc text-xl'>
                            {points.map((point, index) => (
                            <li key={index} className=' py-2'>{point}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ))}
    </div>
    )
}

export default AnimatedCards


// <div className="flex main-h-screen flex-col justify-center bg-slate-100">
//     <div className="group h-96 w-96 [prespective:1000px]">
//         <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//             <div className="absolute insert-0 h-full w-full [backface-visibility:hidden]">
//                 <div className="flex min-h-full flex-col items-center justify-center">
//                     <h1 className='text-3xl'>Course Overview</h1>
//                 </div>
//             </div>
//             <div className="absolute insert-0 h-full w-full rounded-xl bg-sky-400 px-12 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                 <div className="flex min-h-full flex-col items-center justify-center">
//                     <ul className='list-disc text-xl'>
//                         <li className=' py-2'>Covers Machine Learning, Deep Learning, AI & Big Data</li>
//                         <li className=' py-2'>Working Professional Trainers from Statistics, Big Data and machine learning industrial experience</li>
//                         <li className=' py-2'>With End to End Live Projects in Different industry, AI Domains</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>





// <div className="flex main-h-screen flex-col justify-center bg-slate-100">
//         <div className="group h-96 w-96 [prespective:1000px]">
//             <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 <div className="absolute insert-0 [backface-visibility:hidden]">
//                     <h1>Demo</h1>
//                 </div>
//                 <div className="absolute insert-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                     <div className="flex min-h-full flex-col items-center justify-center">
//                         <h1 className="text-3xl font-bold">Padmavati</h1>
//                         <p className="text-lg">Photographer & Artist</p>
//                         <p className="text-base">Photographer & Artist</p>
//                         <button className="mt-2 rounded-md bg-neural-800 py-1 px-2 text-sm hover:bg-neutral-900">Read Me</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>