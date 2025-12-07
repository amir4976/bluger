import BlugCards from '@/components/modules/main/BlugCards'
import Link from 'next/link'
import React from 'react'

function LatestBlugs() {
  return (
    <div className='grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-5 mt-10'>
          <Link href={'/Posts/1'}>
          <BlugCards  text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/1.jpg"} />
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards  text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/2.jpg"} />
          </Link>
          <Link href={'/Posts/1'}> 
          <BlugCards text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/3.jpg"} />
          </Link> 
    </div>
  )
}

export default LatestBlugs
