import React from 'react';
import { LuSettings2 } from "react-icons/lu";


const SearchBar = ({setMainMenu,handleSearch,setQuery,query}) => {
  
  
  
    // this is how we can fetch data from api and use it 
  
  return (
     <div className='flex items-center shadow-xl m-auto group bg-white rounded-full w-full border-2 border-[#ea5858] md:w-1/2 transition-all duration-300'>
           <input
             onChange={handleSearch} 
             value={query} 
             type="text"
             placeholder='Hungry? Start typing!'
             className='px-4 py-1 w-4/5 h-10 rounded-l-full border-r-2 outline-none'
           />
           <button className="w-1/5 h-full py-2 bg-[#ea5858] flex gap-2 rounded-r-full">
             <LuSettings2 className='ml-6 text-xl text-[#fff0e9]' />
             <span className='hidden lg:block text-[#fff0e9]'>Filters</span>
           </button>
         </div>
  );
}

export default SearchBar;
