'use client'
import React from 'react'
import Link from 'next/link'

export default function MenuComponent() {
    return (
        <>
    <button class="settings-btn w-full md:hidden flex items-center justify-center gap-2 p-2 rounded bg-primary text-white">
        <span class="capitalize">settings_menu</span>
        <i class="fa-solid fa-chevron-down text-sm"></i>
    </button>
    <div class="h-0 overflow-hidden md:h-auto md:overflow-auto transition-all duration-300 font-medium">
        <nav class="db-card p-3">
            <Link href='/Dashboard/settings/' class="db-tab-btn">
                <i class="lab lab-line-company text-sm"></i>
                Company
            </Link>
            <Link  href='/Dashboard/settings/site' class="db-tab-btn">
                <i class="lab lab-line-site  text-sm"></i>
                site
            </Link>
            <Link  href='/Dashboard/settings/mail' class="db-tab-btn">
                <i class="lab lab-line-mail text-sm"></i>
                mail
            </Link>
            <Link  href='/Dashboard/settings/theme' class="db-tab-btn">
                <i class="lab lab-line-theme text-sm"></i>
                theme
            </Link>
            <Link  href='/Dashboard/settings/currency' class="db-tab-btn">
                <i class="lab lab-line-currencies text-sm"></i>
                currencies
            </Link>
            <Link  href='/Dashboard/settings/product-categories' class="db-tab-btn">
                <i class="lab lab-line-item-categories text-sm"></i>
                product categories
            </Link>
            <Link  href='/Dashboard/settings/product-attributes' class="db-tab-btn">
                <i class="lab lab-line-item-attributes text-sm"></i>
                product attributes
            </Link>
            <Link  href='/Dashboard/settings/product-brands' class="db-tab-btn">
                <i class="lab lab-line-brand text-sm"></i>
                product brands
            </Link>
            <Link  href='/Dashboard/settings/suppliers' class="db-tab-btn">
                <i class="lab lab-line-supplier text-sm"></i>
                suppliers
            </Link>
            <Link  href='/Dashboard/settings/units' class="db-tab-btn">
                <i class="lab lab-line-unit text-sm"></i>
                units
            </Link>
            <Link  href='/Dashboard/settings/taxes' class="db-tab-btn">
                <i class="lab lab-line-taxes text-sm"></i>
                taxe
            </Link>
            {/* <Link  href='' class="db-tab-btn">
                <i class="lab lab-line-role-permission text-sm"></i>
                role_permissions
            </Link>
            <Link  href='' class="db-tab-btn">
                <i class="lab lab-line-global text-sm"></i>
                languages
            </Link> */}
        </nav>
    </div>
        </>
    )
}