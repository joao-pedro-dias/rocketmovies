import { Container, Profile  } from './styles';
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input className="input"
                placeholder="Pesquisar pelo título"
            />

            <Profile>

                <div>
                    <Link to="/profile">
                        <strong>João Pedro Dias</strong>
                    </Link>
                    <span>Sair</span>
                </div>
                
                <img
                    src="https://github.com/joao-pedro-dias.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    );
}