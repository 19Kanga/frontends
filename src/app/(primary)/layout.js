"use client"
import Footer from "@/components/shared/Footer";  // Adjusted path
import Navbar from "@/components/shared/Navbar";
import { useAppDispatch, useAppSelector } from '@/app/Redux/Store/store';
import { getAllMenus} from '@/app/Redux/Reducer/menuSlice';
import { getAllCategories} from '@/app/Redux/Reducer/categoriesSlice';
import { getAllAttribute} from '@/app/Redux/Reducer/productAttributeSlice';
import { useEffect } from "react";

export default function MainLayout({ children }) {
    const dispatch = useAppDispatch()
    const { isSuccess, menus, isError, message } = useAppSelector(state => state.menuReducer)
    const { categories} = useAppSelector(state => state.categoriesReducer)
    const { attribute} = useAppSelector(state => state.productAttributeReducer)

    useEffect(() => {
        dispatch(getAllMenus());
        dispatch(getAllCategories());
        dispatch(getAllAttribute());
    }, [getAllMenus,getAllAttribute])
    // console.log(menus)
    console.log(categories)
    // console.log(attribute?.filter((z) => z.id ===2))

    return (
        <div>
            <Navbar menus={menus} categories={categories} attribute={attribute} />
            {children}
            <Footer />
        </div>
    );
}
