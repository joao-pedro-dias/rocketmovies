import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Link  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiTimeLine } from "react-icons/ri";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { format, isValid, parseISO } from "date-fns";

export function MoviePreview(){

    const [ movie, setMovie ] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/notes/${id}`).then(response => {
            setMovie(response.data);    
        });
    }, [id]);

    useEffect(() => {
        api.get(`/notes/${id}`).then(response => {
            setMovie(response.data);    
        });
    }, [id]);

    const handleDeleteMovie = async () => {
        const shouldDelete = window.confirm("Tem certeza que deseja excluir este filme?");
        
        if (shouldDelete) {
          try {
            await api.delete(`/notes/${id}`);
            navigate("/");

          } catch (error) {
            console.log(error);
          }
        }
      };      

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

                <div className="content">
                    <p>{movie.description}</p>
                </div>

                <div className='section-button'>
                    <button className='delete' onClick={handleDeleteMovie}>Excluir filme</button>
                </div>

            </Content>
        </Container>
    );
}