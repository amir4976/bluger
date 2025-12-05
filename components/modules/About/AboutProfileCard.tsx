import React from 'react'

function AboutProfileCard({title , desc}:{title:string,desc:string}) {
  return (
    <div className='border-3 rounded-2xl hover:bg-yellow-300 flex justify-center items-center flex-col py-5 bg-white transition-all' >
        <div className="text-8xl">{title}</div>
        <div className="text-xl">{desc}</div>
    </div>
  )
}

export default AboutProfileCard
