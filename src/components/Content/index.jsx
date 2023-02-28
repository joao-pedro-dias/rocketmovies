import { Container, Button } from "./styles";
import { RiAddLine, RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Content({ searchTerm }){

    const [ movies, setMovies ] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const query = searchTerm ? `${searchTerm}` : "";
        api.get(`/notes/${query}`).then(response => {
            const sortedMovies = Array.isArray(response.data) ? response.data.sort((a, b) => {
                if(a.created_at > b.created_at){
                    return -1;
                } else if(a.created_at < b.created_at) {
                    return 1;
                } else{
                    return 0;
                }
            }) : response.data;
            setMovies(sortedMovies);
        });

    }, [searchTerm]);

    useEffect(() => {
        const regex = new RegExp(searchTerm, "i");
        if (Array.isArray(movies)) {
          const filtered = movies.filter(movie => regex.test(movie.title));
          setFilteredMovies(filtered);
        }
    }, [movies, searchTerm]);
      
    const displayedMovies = searchTerm === "" ? movies : filteredMovies || [];
      
    return(
        <Container>
            <h1>Meus filmes</h1>
            <Link to="/createmovie">
                <Button>
                    <RiAddLine/>
                        Adicionar filme
                </Button>
            </Link>

            {Array.isArray(displayedMovies) && displayedMovies.map(movie => (
                <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    rating={movie.rating}
                    text={movie.description}
                    tags={movie.tags}
                />
            ))}
            
        </Container>
    );
}