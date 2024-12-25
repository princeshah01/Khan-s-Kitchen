import StarRating from "../Rating.js";

const Testimonial = ({data}) => {
console.log(data);
const {stars ,publishAt , text , reviewerPhotoUrl , name ,publishedAtDate} = data;
    return (

        <div className="hover:scale-105 transition transform ease-in-out shadow-lg rounded-2xl w-[370px] h-[300px] bg-red-100 px-7 py-8 ">
            <div className="flex justify-between h-[50px] ">
                {/* star and published date */}
                <div>
                    <StarRating rating={stars} totalRating={5} size={"3xl"} />
                </div>
                <div>
                    <span className="text-sm opacity-70">{publishAt}</span>
                </div>
            </div>
            <div className="h-[130px] overflow-x-auto" >
                <blockquote><p className="text-lg"><span className="font-bold text-3xl">“</span>{text}<span className="font-bold text-3xl">”</span></p></blockquote>
            </div>
            <div className="flex gap-4 items-center ">
                {/* picture and name with date of review */}
                <img className="w-[15%]" src={reviewerPhotoUrl} alt="thisisimage" />
                <div className="w-3/4">
                    <p className="text-lg -mb-1">{name}</p>
                    <span className="text-sm opacity-70">{publishedAtDate.slice(0, 10)}</span>
                </div>
            </div>

        </div>
    );
}

export default Testimonial;
