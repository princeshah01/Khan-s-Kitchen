const StarRating = ({ rating, totalRating = 5, size = "2xl" }) => {
  const stars = [];
  for (let j = 1; j <= totalRating; j++) {
    if (j <= rating) {
      stars.push(
        <span key={j} className={`text-${size} text-[#fdcc63]`}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={j} className={`text-${size} text-[#e0e0e0]`}>
          ★
        </span>
      );
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
