import React from "react";
import { FaShippingFast  } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { MdDeliveryDining } from "react-icons/md";



const HeroCard= () => {
return (
<div className="gap-8 Hero-card w-full md:w-[80%] m-auto p-8 flex flex-col lg:flex-row  border rounded-3xl bg-[#f7f7f7] border-[#f7f7f7] shadow-2xl mt-10 py-12">

 

<div className="fresh-food flex gap-3 w-full lg:w-1/3">
    <div className="w-[30%] flex justify-center -mt-5">

  <div className="bg-[#fdcc63] rounded-full flex justify-center items-center w-16 h-16 mb-8 mt-6">
  <FaShippingFast size={28}/>
  </div>
    </div>
  <div className="w-[70%]">
    <h2 className="font-bold text-xl mb-2">Fast Delivery</h2>
    <p className="text-sm">The food will be Delivered to your Home within 30 min of your ordering .</p>
  </div>
</div>


<div className="fresh-food flex  gap-3 w-full lg:w-1/3">
    <div className="w-[30%] flex justify-center -mt-5">

  <div className="bg-[#fdcc63] rounded-full flex justify-center items-center w-16 h-16 mb-8 mt-6">
    <SiCodefresh size={28} />
  </div>
    </div>
  <div className="w-[70%]">
    <h2 className="font-bold text-xl mb-2">Fresh Food</h2>
    <p className="text-sm">Your food will be Delivered 100% Fresh to Your Home. We Do Not Deliver Stale Food.</p>
  </div>
</div>





<div className="fresh-food flex  gap-3 w-full lg:w-1/3">
    <div className="w-[30%] flex justify-center -mt-5">

  <div className="bg-[#fdcc63] rounded-full flex justify-center items-center w-16 h-16 mb-8 mt-6">
  <MdDeliveryDining size={28}/>
  </div>
    </div>
  <div className="w-[70%]">
    <h2 className="font-bold text-xl mb-2">Free Delivery</h2>
    <p className="text-sm">Your Food Delivery is Absolutely Free. No Cost Just Order And Enjoy .</p>
  </div>
</div>
    

</div>
)

};

export default HeroCard ;