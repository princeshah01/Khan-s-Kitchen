const StarRating = ({ rating , totalRating = 5 }) => {
  const stars = [];
  for (let j = 1; j <= totalRating; j++) {
    if (j <= rating) {
      stars.push(<span key={j} className="text-2xl text-[#fdcc63]">★</span>);
    } else {
      stars.push(<span key={j} className="text-2xl text-gray-400 opacity-70">★</span>);
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
