"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import './dashboard.css'
import './app.css'

export default function DefaultLayout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex" style={{ backgroundColor: 'rgb(241 245 249 / 1)' }}>

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col lg:ml-72.5 w-full" >

          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>

      </div>
      {/* <span className='text-2xl font-bold text-center mt-25 w-full h-50'>404 Error</span> */}
    </>
  );
}
