import { Container } from "./styles";
import { Tag } from "../Tag";
import { StarRating } from "../StarRating";
import { Link } from "react-router-dom";

export function Card( { id, title, text, tags = [], rating } ){
    return(
        <Container>
        <Link to={`/moviepreview/${id}`}>
            <h2>{title}</h2>
        </Link>

            <StarRating rating={rating}/>

            <p>{text}</p>

            <div>
                {tags.map(tag => (
                    <Tag key={tag.id} title={tag.name}/>
                ))}
            </div>
        </Container>
    );
}