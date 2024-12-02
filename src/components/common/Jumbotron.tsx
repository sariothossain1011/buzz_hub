import Link from 'next/link'
import React from 'react'

interface PageTitleProps{
    title:string
}

const Jumbotron:React.FC <PageTitleProps > = ({title}) => {
  return (
    <div className="text-center py-20 md:py-40">
        <h1 className="text-2xl md:text-4xl text-[#33101C] font-semibold md:font-bold uppercase">
          {title}
        </h1>
        <p className="text-sm font-normal py-2 ">
          <Link href="/">Home</Link> &#x2022; <span>{title}</span>
        </p>
      </div>
  )
}

export default Jumbotron