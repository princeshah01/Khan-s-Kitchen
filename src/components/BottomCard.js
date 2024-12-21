import StarRating from "./Rating" ;
const BottomCard = (props) => {
    const {food} = props ;
    const {name ,image ,price ,avgRating} = food ;
  return (
    <div className=" p-3 flex flex-col border rounded-lg mx-2 mb-4">
        <div><img  className="w-[225px] h-40"  src={image} alt="" /></div>
        <div className="flex gap-2 w-full">
            <div className="w-[70%] flex flex-col gap-4">
                <p className="text-lg font-bold text-nowrap">{name}</p>
                <StarRating rating={avgRating}/>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl">₹{(price / 100) * 80}</p>
              <span className="text-sm line-through opacity-60">{price}</span>
            </div>
        </div>
    </div>
  );
}

export default BottomCard;
