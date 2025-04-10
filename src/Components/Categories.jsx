import React from 'react'
import { usePaginationContext } from '../Contexts/PaginationProvider';

export default function Categories(props) {
    const { currcategory ,categories, setCurrcategory } = props;
    const {setPageNum}=usePaginationContext(); // Fix: Destructure props
  return (
    <div className="flex space-x-1 mt-2">
    <button
      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
        currcategory === "All categories"
          ? "bg-blue-600 text-white" // Active state
          : "bg-gray-600 text-white hover:bg-gray-700" // Default state
      }`}
      onClick={() => {setCurrcategory("All categories");
                      setPageNum(1);
      }} // Fix: Update currcategory
    >
      All categories
    </button>
    {categories.map((category) => (
      <button
        key={category} // Fix: Add key prop
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          currcategory === category
            ? "bg-blue-600 text-white" // Active state
            : "bg-gray-600 text-white hover:bg-gray-700" // Default state
        }`}
        onClick={() => {
            setCurrcategory(category);
            setPageNum(1);
          }}
      >
        {category}
      </button>
    ))}
  </div>
  )
}
