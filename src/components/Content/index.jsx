import { Container, Button } from "./styles";
import { RiAddLine, RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Content(){

    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('/notes').then(response => {
            const sortedMovies = response.data.sort((a, b) => {
                if(a.created_at > b.created_at){
                    return -1;
                } else if(a.created_at < b.created_at) {
                    return 1;
                } else{
                    return 0;
                }
            });
            setMovies(sortedMovies);
        });
    }, []);

    return(
        <Container>
            <h1>Meus filmes</h1>
            <Link to="/createmovie">
                <Button>
                    <RiAddLine/>
                        Adicionar filme
                </Button>
            </Link>

            {movies.map(movie => (
                <Card
                    key={movie.id}
                    title={movie.title}
                    rating={movie.rating}
                    text={movie.description}
                    tags={movie.tags}
                />
            ))}
            

        </Container>
    );
}