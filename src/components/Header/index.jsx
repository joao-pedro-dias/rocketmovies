import { Container, Profile  } from './styles';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useState } from "react";

export function Header({ onSearch }){

    const { signOut, user } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleInputChange(event) {
      const { value } = event.target;
      setSearchTerm(value);
      onSearch(value);
    }

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input className="input"
                placeholder="Pesquisar pelo título ou tag"
                value={searchTerm}
                onChange={handleInputChange}
            />

            <Profile>

                <div>
                    <Link to="/profile">
                        <strong>
                            {user.name}
                        </strong>
                    </Link>
                    <button onClick={signOut}>Sair</button>
                </div>
                
                <img
                    src={avatarUrl}
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    );
}