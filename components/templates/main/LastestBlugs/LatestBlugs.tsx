import BlugCards from '@/components/modules/main/BlugCards'
import Link from 'next/link'
import React from 'react'

function LatestBlugs() {
  return (
    <div className='grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-5 mt-10'>
          <Link href={'/Posts/1'}>
          <BlugCards />
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards />
          </Link>
          <Link href={'/Posts/1'}> 
          <BlugCards />
          </Link>
    </div>
  )
}

export default LatestBlugs
