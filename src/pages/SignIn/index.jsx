import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RiMailLine, RiLock2Line } from "react-icons/ri";

export function SignIn(){
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

                <Button
                    title="Entrar"
                />

                <a href="#">
                    Criar conta
                </a>
            </Form>

            <Background/>
        </Container>
    );

}