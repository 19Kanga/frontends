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
            {/* <div class="col-12"> */}
                <div class="db-card">
                    <div class="db-card-header border-none">
                        <h3 class="db-card-title">Products</h3>
                        <div class="db-card-filter gap-4 relative">
                            <div class="db-field-down-arrow">
                                <select class="db-card-filter-select">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">10</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                            {/* <FilterComponent /> */}
                            {/* <div class="dropdown-group"> */}
                                {/* <ExportComponent /> */}
                                {/* <div class="dropdown-list db-card-filter-dropdown-list"> */}
                                    {/* <PrintComponent:props="printObj" /> */}
                                    {/* <ExcelComponent:method="xls" /> */}
                                {/* </div> */}
                            {/* </div> */}
                            <button onClick={sideDrawerShow} type="button" data-drawer="#sidebar" class="db-btn h-[37px] text-white bg-primary">
                                <i class="fa fa-plus-circle"></i>
                                <span> Add Product</span>
                            </button>
                            <ProductCreate />
                        </div>
                    </div>
                    <div class="db-table-responsive">
                        <table class="db-table stripe" id="print">
                            <thead class="db-table-head">
                                <tr class="db-table-head-tr">
                                    <th class="db-table-head-th"> NAME</th>
                                    <th class="db-table-head-th">CATEGORY</th>
                                    <th class="db-table-head-th">BUYING PRICE</th>
                                    <th class="db-table-head-th">SELLING PRICE</th>
                                    <th class="db-table-head-th">STATUS</th>
                                    <th class="db-table-head-th hidden-print">
                                        ACTION</th>
                                </tr>
                            </thead>
                            <tbody class="db-table-body" v-if="employees.length > 0">
                                <tr class="db-table-body-tr" v-for="employee in employees">
                                    <td class="db-table-body-td">test</td>
                                    <td class="db-table-body-td">Mattresses</td>
                                    <td class="db-table-body-td">50.00</td>
                                    <td class="db-table-body-td">80.00</td>
                                    <td class="db-table-body-td">
                                    in stock
                                    </td>
                                    <td class="db-table-body-td hidden-print">
                                        <div class="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                            <Link href="href" class="db-table-action view">
                                                <i class="far fa-eye"></i>
                                                <span class="db-tooltip">view</span>
                                            </Link>
                                            <button class="db-table-action delete">
                                                <i class="fas fa-trash"></i>
                                                <span class="db-tooltip">delete</span>
                                            </button>
                                            <Link href="href" class="db-table-action edit">
                                                <i class="far fa-edit"></i>
                                                <span class="db-tooltip">edit</span>
                                            </Link>
                                            {/* <SmIconSidebarModalEditComponent/> */}
                                            {/* <SmIconDeleteComponent/> */}
                                        </div>
                                    </td>
                                </tr>
                                        <tr class="db-table-body-tr" v-for="employee in employees">
                                            <td class="db-table-body-td">test</td>
                                    <td class="db-table-body-td">Bed</td>
                                    <td class="db-table-body-td">50.00</td>
                                    <td class="db-table-body-td">80.00</td>
                                    <td class="db-table-body-td">
                                    in stock</td>
                                            <td class="db-table-body-td hidden-print"
                                                v-if="permissionChecker('employees_show') || permissionChecker('employees_edit') || permissionChecker('employees_delete')">
                                                <div class="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                                    <Link href="href" class="db-table-action view">
                                                        <i class="far fa-eye"></i>
                                                        <span class="db-tooltip">view</span>
                                                    </Link>
                                                    <button class="db-table-action delete">
                                                        <i class="fas fa-trash"></i>
                                                        <span class="db-tooltip">delete</span>
                                                    </button>
                                                    <Link href="href" class="db-table-action edit">
                                                        <i class="far fa-edit"></i>
                                                        <span class="db-tooltip">edit</span>
                                                    </Link>
                                                    {/* <SmIconSidebarModalEditComponent/> */}
                                                    {/* <SmIconDeleteComponent/> */}
                                                </div>
                                            </td>
                            </tr>
                            <tr class="db-table-body-tr" v-for="employee in employees">
                                <td class="db-table-body-td">test</td>
                                    <td class="db-table-body-td">Sales</td>
                                    <td class="db-table-body-td">50.00</td>
                                    <td class="db-table-body-td">80.00</td>
                                    <td class="db-table-body-td">
                                    in stock</td>
                                <td class="db-table-body-td hidden-print">
                                    <div class="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                        <Link href="href" class="db-table-action view">
                                            <i class="far fa-eye"></i>
                                            <span class="db-tooltip">view</span>
                                        </Link>
                                        <Link href="href" class="db-table-action delete">
                                                <i class="fas fa-trash"></i>
                                                <span class="db-tooltip">delete</span>
                                        </Link>
                                        <Link href="href" class="db-table-action edit">
                                            <i class="far fa-edit"></i>
                                            <span class="db-tooltip">edit</span>
                                        </Link>
                                        {/* <SmIconSidebarModalEditComponent/> */}
                                        {/* <SmIconDeleteComponent/> */}
                                    </div>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                <div class="flex max-sm:flex-col max-sm:gap-2 items-center justify-between border-t border-gray-200 bg-white px-4 py-6">
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