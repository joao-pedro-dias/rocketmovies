import { Container } from "./styles";
import { Tag } from "../Tag";
import { StarRating } from "../StarRating";

export function Card( { title, icon: Icon, text, tags = [], rating } ){
    return(
        <Container>
            <h2>{title}</h2>

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