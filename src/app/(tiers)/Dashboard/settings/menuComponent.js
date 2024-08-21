'use client'
import React from 'react'
import Link from 'next/link'

export default function MenuComponent() {
    return (
        <>
    <button className="settings-btn w-full md:hidden flex items-center justify-center gap-2 p-2 rounded bg-primary text-white">
        <span className="capitalize">settings_menu</span>
        <i className="fa-solid fa-chevron-down text-sm"></i>
    </button>
    <div className="h-0 overflow-hidden md:h-auto md:overflow-auto transition-all duration-300 font-medium">
        <nav className="db-card p-3">
            <Link href='/Dashboard/settings/' className="db-tab-btn">
                <i className="lab lab-line-company text-sm"></i>
                Company
            </Link>
            <Link  href='/Dashboard/settings/site' className="db-tab-btn">
                <i className="lab lab-line-site  text-sm"></i>
                site
            </Link>
            <Link  href='/Dashboard/settings/mail' className="db-tab-btn">
                <i className="lab lab-line-mail text-sm"></i>
                mail
            </Link>
            <Link  href='/Dashboard/settings/theme' className="db-tab-btn">
                <i className="lab lab-line-theme text-sm"></i>
                theme
            </Link>
            <Link  href='/Dashboard/settings/currency' className="db-tab-btn">
                <i className="lab lab-line-currencies text-sm"></i>
                currencies
            </Link>
            <Link  href='/Dashboard/settings/product-categories' className="db-tab-btn">
                <i className="lab lab-line-item-categories text-sm"></i>
                product categories
            </Link>
            <Link  href='/Dashboard/settings/product-attributes' className="db-tab-btn">
                <i className="lab lab-line-item-attributes text-sm"></i>
                product attributes
            </Link>
            <Link  href='/Dashboard/settings/product-brands' className="db-tab-btn">
                <i className="lab lab-line-brand text-sm"></i>
                product brands
            </Link>
            <Link  href='/Dashboard/settings/suppliers' className="db-tab-btn">
                <i className="lab lab-line-supplier text-sm"></i>
                suppliers
            </Link>
            <Link  href='/Dashboard/settings/units' className="db-tab-btn">
                <i className="lab lab-line-unit text-sm"></i>
                units
            </Link>
            <Link  href='/Dashboard/settings/taxes' className="db-tab-btn">
                <i className="lab lab-line-taxes text-sm"></i>
                taxe
            </Link>
            {/* <Link  href='' className="db-tab-btn">
                <i className="lab lab-line-role-permission text-sm"></i>
                role_permissions
            </Link>
            <Link  href='' className="db-tab-btn">
                <i className="lab lab-line-global text-sm"></i>
                languages
            </Link> */}
        </nav>
    </div>
        </>
    )
}