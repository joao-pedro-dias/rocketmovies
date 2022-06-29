import { Container, Profile  } from './styles';
import { Input } from '../Input';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input placeholder="Pesquisar pelo título"/>

            <Profile>

                <div>
                    <strong>João Pedro Dias</strong>
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