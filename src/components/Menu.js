import Card from './MenuCard';
import Simmer from './Simmer';
import SearchBar from './SearchBar';
import { foodDataMain } from './utils/data';
import { useState ,useEffect } from 'react';


const Menu = () => {
  let [MainMenu, setMainMenu] = useState([]);
  let [query, setQuery] = useState('');

  
      useEffect( () =>{
        fetchData();
      },[]);
    
        let fetchData = async ()=>{
          let data = await foodDataMain();
          console.log(data);
          setMainMenu(data) ;
        }
    
      const handleSearch = (e) => {
        const q = e.target.value;
        setQuery(q); 
    
       
        const filtered = foodDataMain.filter((item) =>item.name.toLowerCase().includes(q.toLowerCase()));
        setMainMenu(filtered); 
      };


  if(MainMenu.length === 0 ){
    
    return (
      <div>
              <SearchBar/>

    <Simmer  />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 w-full'>
     
    <SearchBar props={{setMainMenu,handleSearch,setQuery,query}}/>

      <div className='w-[80%] place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-8 my-16 md:mx-16 lg:mx-32'>
        {MainMenu?.length > 0 ? (
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
