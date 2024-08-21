"use client"
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import ProductCreate from './productCreate'

export default function Products() {
    const sideDrawerShow= () =>{
        const drawerDivs = document?.querySelectorAll(".drawer");
        const drawerSets = document?.querySelectorAll("[data-drawer]");
        drawerSets?.forEach((drawerSet) => {
            const targetElm = document?.querySelector(drawerSet?.dataset?.drawer);
            drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
            drawerDivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
            targetElm?.classList?.add("active");
            drawerSet?.classList?.add("active");
            document.body.style.overflowY = "hidden";
            document?.querySelector(".backdrop")?.classList?.add("active");
        });
    }

    return (
        <>
            <Breadcrumb pageName="Products"/>
            {/* <div className="col-12"> */}
                <div className="db-card">
                    <div className="db-card-header border-none">
                        <h3 className="db-card-title">Products</h3>
                        <div className="db-card-filter gap-4 relative">
                            <div className="db-field-down-arrow">
                                <select className="db-card-filter-select">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">10</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                            {/* <FilterComponent /> */}
                            {/* <div className="dropdown-group"> */}
                                {/* <ExportComponent /> */}
                                {/* <div className="dropdown-list db-card-filter-dropdown-list"> */}
                                    {/* <PrintComponent:props="printObj" /> */}
                                    {/* <ExcelComponent:method="xls" /> */}
                                {/* </div> */}
                            {/* </div> */}
                            <button onClick={sideDrawerShow} type="button" data-drawer="#sidebar" className="db-btn h-[37px] text-white bg-primary">
                                <i className="fa fa-plus-circle"></i>
                                <span> Add Product</span>
                            </button>
                            <ProductCreate />
                        </div>
                    </div>
                    <div className="db-table-responsive">
                        <table className="db-table stripe" id="print">
                            <thead className="db-table-head">
                                <tr className="db-table-head-tr">
                                    <th className="db-table-head-th"> NAME</th>
                                    <th className="db-table-head-th">CATEGORY</th>
                                    <th className="db-table-head-th">BUYING PRICE</th>
                                    <th className="db-table-head-th">SELLING PRICE</th>
                                    <th className="db-table-head-th">STATUS</th>
                                    <th className="db-table-head-th hidden-print">
                                        ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="db-table-body" v-if="employees.length > 0">
                                <tr className="db-table-body-tr" v-for="employee in employees">
                                    <td className="db-table-body-td">test</td>
                                    <td className="db-table-body-td">Mattresses</td>
                                    <td className="db-table-body-td">50.00</td>
                                    <td className="db-table-body-td">80.00</td>
                                    <td className="db-table-body-td">
                                    in stock
                                    </td>
                                    <td className="db-table-body-td hidden-print">
                                        <div className="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                            <Link href="href" className="db-table-action view">
                                                <i className="far fa-eye"></i>
                                                <span className="db-tooltip">view</span>
                                            </Link>
                                            <button className="db-table-action delete">
                                                <i className="fas fa-trash"></i>
                                                <span className="db-tooltip">delete</span>
                                            </button>
                                            <Link href="href" className="db-table-action edit">
                                                <i className="far fa-edit"></i>
                                                <span className="db-tooltip">edit</span>
                                            </Link>
                                            {/* <SmIconSidebarModalEditComponent/> */}
                                            {/* <SmIconDeleteComponent/> */}
                                        </div>
                                    </td>
                                </tr>
                                        <tr className="db-table-body-tr" v-for="employee in employees">
                                            <td className="db-table-body-td">test</td>
                                    <td className="db-table-body-td">Bed</td>
                                    <td className="db-table-body-td">50.00</td>
                                    <td className="db-table-body-td">80.00</td>
                                    <td className="db-table-body-td">
                                    in stock</td>
                                            <td className="db-table-body-td hidden-print"
                                                v-if="permissionChecker('employees_show') || permissionChecker('employees_edit') || permissionChecker('employees_delete')">
                                                <div className="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                                    <Link href="href" className="db-table-action view">
                                                        <i className="far fa-eye"></i>
                                                        <span className="db-tooltip">view</span>
                                                    </Link>
                                                    <button className="db-table-action delete">
                                                        <i className="fas fa-trash"></i>
                                                        <span className="db-tooltip">delete</span>
                                                    </button>
                                                    <Link href="href" className="db-table-action edit">
                                                        <i className="far fa-edit"></i>
                                                        <span className="db-tooltip">edit</span>
                                                    </Link>
                                                    {/* <SmIconSidebarModalEditComponent/> */}
                                                    {/* <SmIconDeleteComponent/> */}
                                                </div>
                                            </td>
                            </tr>
                            <tr className="db-table-body-tr" v-for="employee in employees">
                                <td className="db-table-body-td">test</td>
                                    <td className="db-table-body-td">Sales</td>
                                    <td className="db-table-body-td">50.00</td>
                                    <td className="db-table-body-td">80.00</td>
                                    <td className="db-table-body-td">
                                    in stock</td>
                                <td className="db-table-body-td hidden-print">
                                    <div className="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                        <Link href="href" className="db-table-action view">
                                            <i className="far fa-eye"></i>
                                            <span className="db-tooltip">view</span>
                                        </Link>
                                        <Link href="href" className="db-table-action delete">
                                                <i className="fas fa-trash"></i>
                                                <span className="db-tooltip">delete</span>
                                        </Link>
                                        <Link href="href" className="db-table-action edit">
                                            <i className="far fa-edit"></i>
                                            <span className="db-tooltip">edit</span>
                                        </Link>
                                        {/* <SmIconSidebarModalEditComponent/> */}
                                        {/* <SmIconDeleteComponent/> */}
                                    </div>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                <div className="flex max-sm:flex-col max-sm:gap-2 items-center justify-between border-t border-gray-200 bg-white px-4 py-6">
                    <span className='text-[0.8rem] opacity-6'>Showing 1 to 10 of 108 entries</span>
                    <ReactPaginate
                        pageLinkClassName='text-primary py-1 px-2 border-2 border-primary/6 rounded-sm'
                        activeClassName='text-red-400'
                        activeLinkClassName='text-red-400'
                        nextLinkClassName='text-primary'
                        previousClassName='text-primary'
                        className='flex gap-2'
                        breakLabel="..."
                        nextLabel="Next"

                        // onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={5}
                        previousLabel="Previous"
                        renderOnZeroPageCount={null}
                    />
                    
                </div>
            </div>
            {/* </div> */}

        </>
    )
}