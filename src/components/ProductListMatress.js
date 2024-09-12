"use client"
import { Mattresses, Products } from '../data/products'
import React, { useEffect, useState, useRef, Suspense } from 'react'
import ProductCardMatress from './ProductCardMatress'
import ReactPaginate from 'react-paginate'

const ProductListMatress = ({ selectedGrid, setSelectedGrid, pageType,CallingFrom,datas,categ }) => {
    const listRef = useRef()
    const isMattresses = pageType === 'Mattress';
    const isMattressesPocketSprung = pageType === 'PocketSprung';
     //pagination 
    const itemsPerPage = 12
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentProducts = isMattresses ? datas.slice(itemOffset, endOffset) : datas.slice(itemOffset, endOffset);
 
    const pageCount = Math.ceil(currentProducts.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datas.length;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setItemOffset(newOffset); 
    };
    return (
        <div>
            <section id="Projects"
                className={` ${selectedGrid === 2 ? "custom-grid" : "grid grid-cols-" + selectedGrid} ${selectedGrid !== 0 ? 'justify-items-center justify-center gap-6 max-md:grid-cols-2 ' : ''}mt-10 mb-5 `}>
                    {currentProducts?.map((product, index) => (
                        <ProductCardMatress key={index} categ={categ} item={product} CallingFrom={CallingFrom} pageType={pageType}  selectedGrid={selectedGrid}    />
                    ))}
            </section>
            <hr className='text-primary' />
            <div className='flex justify-center mt-3'>
                <ReactPaginate
                    pageLinkClassName='text-primary'
                    activeClassName='text-red-400'
                    activeLinkClassName='text-red-400'
                    nextLinkClassName='text-primary'
                    previousClassName='text-primary'
                    className='flex gap-5'
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                /></div>
        </div>
    )
}

export default ProductListMatress