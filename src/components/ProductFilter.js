import { BedFinish, BedStorage, BedTypes, Brands, MatressTypes, MattressFirmness, Prices, Sizes } from '../data/fliter'
import React from 'react'

const ProductFilter = ({ pageType }) => {
    return (

        <div className="fixed min-h-full p-0 m-0 join join-vertical menu w-80 bg-base-200 text-base-content">
            <div className='h-[90vh] overflow-auto  p-4'>
                <div className='mb-3 text-xl font-medium text-bold ms-4 text-primary'>Filter</div>
                <hr className=''></hr>
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" defaultChecked />
                    <div className="text-xl font-medium collapse-title">
                        Size
                    </div>
                    <div className="collapse-content">
                        {Sizes.map((item, i) => (
                            <div key={i} className='flex py-2'>
                                <input type="checkbox" className="rounded-full checkbox checkbox-md" id={item.name} />
                                <label htmlFor={item.name} className="flex flex-col ms-2"><span>{item.name}</span><span className='text-xs'>{item.size}</span></label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" />
                    <div className="text-xl font-medium collapse-title">
                        Mattress Type
                    </div>
                    <div className="collapse-content">
                        {MatressTypes.map((item, i) => (
                            <div key={i} className='flex py-2'>
                                <input type="checkbox" className="checkbox checkbox-md" id={item.title} />
                                <label htmlFor={item.title} className="flex justify-between ms-2"><span className='block'>{item.title}</span><span className='block'>({item.count})</span></label>
                            </div>
                        ))}
                    </div>
                </div>
                {pageType === 'Mattress' && <React.Fragment>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="text-xl font-medium collapse-title">
                            Mattress Firmness
                        </div>
                        <div className="collapse-content">
                            {MattressFirmness.map((item, i) => (
                                <div key={i} className='flex py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.title} />
                                    <label htmlFor={item.title} className="flex justify-between ms-2"><span className='block'>{item.title}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="text-xl font-medium collapse-title">
                            Brand
                        </div>
                        <div className="collapse-content">
                            {Brands.map((item, i) => (
                                <div key={i} className='flex py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="flex justify-between ms-2"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div></React.Fragment>}

                {pageType === 'Beds' && <React.Fragment>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="text-xl font-medium collapse-title">
                            Bed Type
                        </div>
                        <div className="collapse-content">
                            {BedTypes.map((item, i) => (
                                <div key={i} className='flex py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="flex justify-between ms-2"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>}
                {pageType === 'Beds' && <React.Fragment>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="text-xl font-medium collapse-title">
                            Bed Storage
                        </div>
                        <div className="collapse-content">
                            {BedStorage.map((item, i) => (
                                <div key={i} className='flex py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="flex justify-between ms-2"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>}
                {pageType === 'Beds' && <React.Fragment>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="text-xl font-medium collapse-title">
                            Bed Finish/Colour
                        </div>
                        <div className="collapse-content">
                            {BedFinish.map((item, i) => (
                                <div key={i} className='flex py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="flex justify-between ms-2"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>}
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" />
                    <div className="text-xl font-medium collapse-title">
                        Price
                    </div>
                    <div className="collapse-content">
                        {Prices.map((item, i) => (<div className='flex py-2' key={i}>
                            <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                            <label htmlFor={item.name} className="flex justify-between ms-2"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                        </div>))}
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0'>
                <button className="p-2 m-2 text-white btn bg-primary rounded-2" style={{ minWidth: '300px', }}>Show 14 Products</button>
            </div>
        </div>
    )
}

export default ProductFilter