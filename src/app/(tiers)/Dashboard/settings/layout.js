"use client";
import MenuComponent from './menuComponent';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'

export default function settingLayout({children}) {
  const tabButtons = document?.querySelectorAll(".db-tab-btn");
const tabDivs = document?.querySelectorAll(".db-tab-div");

tabButtons?.forEach((btnItem) => {
    btnItem?.addEventListener("click", function() {
        const tabTarget = document?.querySelector(btnItem?.dataset?.tab);

        tabButtons?.forEach(tabBtn => tabBtn?.classList?.remove("active"));
        tabDivs?.forEach(tabDiv => tabDiv?.classList?.remove("active"));

        tabTarget?.classList?.add("active");
        btnItem?.classList?.add("active");
    })
})

const subTabButtons = document?.querySelectorAll(".db-tab-sub-btn");
const subTabDivs = document?.querySelectorAll(".db-tab-sub-div");

subTabButtons?.forEach((btnItem) => {
    btnItem?.addEventListener("click", function() {
        const tabTarget = document?.querySelector(btnItem?.dataset?.tab);

        subTabButtons?.forEach(tabBtn => tabBtn?.classList?.remove("active"));
        subTabDivs?.forEach(tabDiv => tabDiv?.classList?.remove("active"));

        tabTarget?.classList?.add("active");
        btnItem?.classList?.add("active");
    })
})
// $(function () {
//     let toggleValue = false;
//     $(document).on('click', '.settings-btn', function () {
//         toggleValue = !toggleValue
//         const pixel = $(this).siblings().prop('scrollHeight');
//         if (toggleValue) {
//             $(this).siblings().css('height', `${pixel}px`);
//             $(this).children().last().removeClass('fa-chevron-down').addClass('fa-chevron-up');
//         } else {
//             $(this).siblings().css('height', `0px`);
//             $(this).children().last().removeClass('fa-chevron-up').addClass('fa-chevron-down');
//         }
//     })
// })

  return (
    <>
      <Breadcrumb pageName="Settings"/>        
      <div className='row'>
                <div class="col-12 md:col-4 xl:col-3">
                    <MenuComponent />
                </div>

                <div class="col-12 md:col-8 xl:col-9">
                    {children}
                </div>
       </div>

    </>
  );
}
