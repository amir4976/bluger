import Educationcard from '@/components/modules/main/Educationcard'
import Title from '@/components/modules/Title/Title'
import React from 'react'

function LastEducations() {
  return (
    <div className='flex flex-col gap-5 mt-20'>
        <Title text={"education"}/>
        <Educationcard text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/e1.jpg"}/>
        <Educationcard text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/e2.jpg"}/>
        <Educationcard text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/e3.jpg"}/>
    </div>
  )
}

export default LastEducations
