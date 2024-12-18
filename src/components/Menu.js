import Card from './MenuCard';
import Simmer from './Simmer';
import SearchBar from './SearchBar';
import { foodDataMain } from './utils/data';
import { useState, useEffect } from 'react';


const Menu = () => {
  let [MainMenu, setMainMenu] = useState([]);
  let [originalMenu , SetoriginalMenu] = useState([]) ;
  let [query, setQuery] = useState('');


  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await foodDataMain();
    console.log(data);
    SetoriginalMenu(data) ;
    setMainMenu(data);
  }

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);


    const filtered = originalMenu.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()));
    setMainMenu(filtered);
  };




  return originalMenu.length === 0 ?      
  <div>
  <SearchBar 
         setMainMenu={setMainMenu}
         handleSearch={handleSearch}
         setQuery={setQuery}
         query={query}
  />

  <Simmer />
</div> : (
    <div className='flex flex-col gap-4 w-full'>

      <SearchBar setMainMenu={setMainMenu}
        handleSearch={handleSearch}
        setQuery={setQuery}
        query={query}
      />

      <div className='w-[80%] place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-8 my-16 md:mx-16 lg:mx-32'>
        {MainMenu?.length > 0 ? (
          MainMenu.map((data, index) => (
            <Card key={index} food={data} />
          ))
        ) : (
          <div className='col-span-full grid place-items-center h-40'>

            <p className="text-lg text-gray-500">No food items found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
