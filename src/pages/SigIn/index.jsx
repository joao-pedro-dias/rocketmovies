import { Container, Form, ButtonForm } from "./styles";
import { Input } from "../../components/Input";
import { RiMailLine, RiLock2Line } from "react-icons/ri";

export function SigIn(){
    return(

        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={RiMailLine}
                />
                
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={RiLock2Line}
                />

                <ButtonForm>
                    Entrar
                </ButtonForm>

                <a href="#">
                    Criar conta
                </a>
            </Form>
        </Container>
    );

}