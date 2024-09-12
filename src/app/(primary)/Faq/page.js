import React from 'react'
import Faq from '@/components/Faq'
import Banner from '@/components/shared/Banner'

export default function Faqpage(){
    return(
        <>
            <Banner title='Faq' />
            <div className="px-[4%]">
                <Faq />
            </div>
        </>
    )
}
