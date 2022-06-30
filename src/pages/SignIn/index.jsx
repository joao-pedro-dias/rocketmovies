import { Container, Form, ButtonForm, Background } from "./styles";
import { Input } from "../../components/Input";

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
                />
                
                <Input
                    placeholder="Senha"
                    type="password"
                />

                <ButtonForm>
                    Entrar
                </ButtonForm>

                <a href="#">
                    Criar conta
                </a>
            </Form>

            <Background/>
        </Container>
    );

}