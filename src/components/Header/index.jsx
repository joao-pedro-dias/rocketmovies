import { Container, Profile  } from './styles';
import { Input } from '../Input';
import { TitleHeader } from '../Content/styles';

export function Header(){
    return(
        <Container>
            <TitleHeader>RocketMovies</TitleHeader>
            <Input/>
            <Profile>
                <div>
                    <strong>João Pedro Dias</strong>
                    <span>Sair</span>
                </div>

                <img
                    src="https://github.com/joao-pedro-dias.png"
                    alt="Foto do usuário" />


            </Profile>
            
        </Container>
    );
}