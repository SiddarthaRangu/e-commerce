import React, { use, useEffect } from 'react'
import { useState } from 'react';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import basicOps from '../Utility/bsicOps';
import { usePaginationContext } from '../Contexts/PaginationProvider';

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products,setproducts]=useState([]);
    const [sortType,setSortType]=useState("0");
    const [categories,setCategories]=useState([]);
    const [currcategory,setCurrcategory]=useState("All categories");
    const {pageNum,setPageNum,pageSize,setPageSize}=usePaginationContext();
    useEffect(() => {
        (async () => {
            const resp=await fetch("https://fakestoreapi.com/products");
            const productdata=await resp.json();
            console.log(productdata);
            setproducts(productdata);
        }
        )();
    }, []);

    useEffect(() => {
        (async () => {
            const resp=await fetch("https://fakestoreapi.com/Products/categories");
            const categories=await resp.json();
            console.log(categories);
            setCategories(categories);                  
        }
        )();
    }, []);


   const obj =basicOps(products,searchTerm,sortType,currcategory,categories,setCurrcategory,pageNum,pageSize);
   const filteredGroupedProducts=obj.filteredGroupedProducts;
   const totalPages=obj.totalPages;






  return (
    <>
        <header className='flex justify-center items-center p-2 bg-gray-800 text-white'>
        <div className='flex flex-col items-center'>
        <div className='flex p-2 space-x-3'>
            <input 
                type="text" 
                className="border-2 text-black " 
                value={searchTerm} 
                placeholder="product name"
                onChange={(e)=>{setSearchTerm(e.target.value) 
                    setPageNum(1);
                }}
            />
        <div className='flex space-x-1'>
            <svg 
                onClick={()=>{setSortType('1')
                    setPageNum(1);}
                }
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round"
                className='bg-white'
                
                
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <svg 
                onClick={()=>{setSortType('-1')
                    setPageNum(1);
                }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                className='bg-white'
                
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        </div>
        </div>

            <Categories categories={categories} setCurrcategory={setCurrcategory} 
            currcategory={currcategory} ></Categories>
        </div>
      </header>
        <main>
            <ProductList filteredGroupedProducts={filteredGroupedProducts}></ProductList>
        </main>
        <div className='flex justify-center items-center p-4'>
            <button onClick={()=>{
                if(pageNum==1)
                    return 
                    setPageNum((pageNum)=>(pageNum-1));
            
            }}
            disabled={pageNum ==1 ? true : false}
            >
                <MdKeyboardArrowLeft className='text-lg'></MdKeyboardArrowLeft></button>
            <p className='text-lg'>{pageNum}</p>
            <button onClick={()=>{
                if(pageNum==totalPages)
                    return
                    setPageNum((pageNum)=>(pageNum+1))}} 
                    disabled={pageNum == totalPages ? true : false}
            >
                <MdKeyboardArrowRight className='text-lg'></MdKeyboardArrowRight>
            </button>
        </div>
        </>
  )
}

export default Home;
