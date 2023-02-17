import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiStarFill, RiTimeLine } from "react-icons/ri";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { format, isValid, parseISO } from "date-fns";

export function MoviePreview(){

    const [ movie, setMovie ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        api.get(`/notes/${id}`).then(response => {
            setMovie(response.data);    
        });
    }, [id]);

    return(
        <Container>
            <Header/>
            <Content>
                <Link to="/">
                    <RiArrowLeftLine/>
                    Voltar
                </Link>

                <header>
                    <h1>{movie.title}</h1>
                    <span>{movie.rating ? <StarRating rating={movie.rating} /> : null}</span>
                </header>

                <div>
                    <span>
                        <img className="icon"
                            src="https://github.com/joao-pedro-dias.png"
                            alt="Foto do usuário"
                        />

                        {movie.user_name}
                    </span>
                    
                    {isValid(parseISO(movie.created_at)) && (
                    <span>
                        <RiTimeLine fill="pink" className="icon" />
                        {format(parseISO(movie.created_at), 'dd/MM/yyyy')}
                    </span>
                    )}

                </div>

                {/* <div className="tags">{tag.name}</div> */}

                {/* <div>
                    {tags.map(tag => (
                        <Tag key={tag.id} title={tag.name}/>
                    ))}
                </div> */}

                <div className="content">
                    <p>{movie.description}</p>
                </div>

            </Content>
        </Container>
    );
}