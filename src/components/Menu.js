import React, { useState } from 'react';
import Card from './MenuCard';
import { foodDataMain } from './utils/data';
import { LuSettings2 } from "react-icons/lu";

const Menu = () => {
  let [query, setQuery] = useState('');
  let [MainMenu, setMainMenu] = useState(foodDataMain);

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q); 

   
    const filtered = foodDataMain.filter((item) =>item.name.toLowerCase().includes(q.toLowerCase()));
    setMainMenu(filtered); 
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
     
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

      <div className='w-[80%] place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-8 my-16 md:mx-16 lg:mx-32'>
        {MainMenu.length > 0 ? (
          MainMenu.map((data, index) => (
            <Card key={index} food={data} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No food items found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
