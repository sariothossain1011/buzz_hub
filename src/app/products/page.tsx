import FeaturesProducts from '@/components/landing/FeaturesProducts'
import React from 'react'

const ProdcutsPage = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-[10%]'>
      <div className="row p-5">
                            {/* {categories?.map((c) => (
                                <Checkbox
                                    key={c._id}
                                    onChange={(e) => handleCheck(e.target.checked, c._id)}
                                >
                                    {c.name}
                                </Checkbox>
                            ))} */}
                            <div><input type="checkbox" /> <span>T-shirt</span></div>
                            <div><input type="checkbox" /> <span>T-shirt</span></div>
                            <div><input type="checkbox" /> <span>T-shirt</span></div>
                        </div>
      </div>
      <div className='w-[90%]'>
        <FeaturesProducts/>
      </div>
    </div>
  )
}

export default ProdcutsPage