import Image from 'next/image'
import React from 'react'

type Props = {title:string}

function CategorisCard({title}: Props) {
  return (
    <div className='p-5 rounded-2xl bg-white border-3 flex flex-col gap-5 hover:bg-yellow-300 transition-all'>
        <Image className='w-full h-fit rounded-2xl' src={'/assets/post1.jpg'} width={500} height={500} alt='categorie'/>
        <p className='text-center text-6xl'>{title}</p>
    </div>
  )
}

export default CategorisCard