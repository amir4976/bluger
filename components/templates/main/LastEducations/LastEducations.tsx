import Educationcard from '@/components/modules/main/Educationcard'
import Title from '@/components/modules/Title/Title'
import React from 'react'

function LastEducations() {
  return (
    <div className='flex flex-col gap-5 mt-20'>
        <Title text={"education"}/>
        <Educationcard/>
        <Educationcard/>
        <Educationcard/>
    </div>
  )
}

export default LastEducations
