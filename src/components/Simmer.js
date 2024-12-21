import React from 'react';



const Simmer = ( {arr = new Array(6).fill(null)}) => {
  return (
  
       
    <div className='w-[80vw] place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-8 my-16 md:mx-16 lg:mx-32 '>

    {arr.map((a,idx)=>{
        return (
            <div key={idx} className='hover:scale-105 card w-[15rem] h-[19rem] relative flex shadow-lg bg-[#fff] rounded-[2rem]'>
            <div className="w-44 h-44 rounded-full overflow-hidden  bg-[#fff] absolute -top-10 -right-10">
              </div>
            </div>
        )
    })}

  
   
    
    </div>
  

    

  );
}

export default Simmer;
