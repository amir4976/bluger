import BlugCards from '@/components/modules/main/BlugCards'
import React from 'react'

function LatestBlugs() {
  return (
    <div className='grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-5 mt-10'>
        <BlugCards/>
        <BlugCards/>
        <BlugCards/>
 
    </div>
  )
}

export default LatestBlugs
