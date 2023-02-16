import { RiStarFill } from "react-icons/ri";

export function StarRating({ rating }){
    const max_rating = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) !== 0;

    return(
        <div>
            {Array(fullStars)
                .fill()
                .map((_, index) => <RiStarFill key={index} />)}
            {hasHalfStar && <RiStarFill style={{ opacity: 0.5 }} />}
            {Array(max_rating - Math.ceil(rating))
                .fill()
                .map((_, index) => <RiStarFill key={`empty-${index}`} style={{ opacity: 0.3 }} />)}
        </div>
    )
}