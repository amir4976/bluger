import MainLyout from '@/components/layouts/MainLayout'
import CategorisCard from '@/components/modules/Categories/CategorisCard'
import React from 'react'

function page() {
  return (
    <div>
    <MainLyout>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
            <CategorisCard title={"text"}/>
            <CategorisCard title={"text"}/>
            <CategorisCard title={"text"}/>

        </div>
    </MainLyout>
    </div>
  )
}

export default page
