import { Container, Profile  } from './styles';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header(){

    const { signOut, user } = useAuth();
    // const [name, setName] = useState(user.name);

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input className="input"
                placeholder="Pesquisar pelo título"
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