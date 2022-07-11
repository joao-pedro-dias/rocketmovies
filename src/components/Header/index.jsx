import { Container, Profile  } from './styles';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
// import { useState } from 'react';

export function Header(){

    const { signOut } = useAuth();
    // const [name, setName] = useState(user.name);

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
                            João Pedro Dias
                        </strong>
                    </Link>
                    <button onClick={signOut}>Sair</button>
                </div>
                
                <img
                    src="https://github.com/joao-pedro-dias.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    );
}