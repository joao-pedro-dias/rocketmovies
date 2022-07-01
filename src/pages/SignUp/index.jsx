import { Container, Form, ButtonForm, Background } from "./styles";
import { Input } from "../../components/Input";
import { RiUser3Line, RiArrowLeftLine, RiMailLine, RiLock2Line } from "react-icons/ri";
import { Link } from "../../components/Link";

export function SignUp(){
    return(

        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={RiUser3Line}
                />

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
                    Cadastrar
                </ButtonForm>

                <Link
                    icon={RiArrowLeftLine}
                    title="Voltar para o login"
                />

            </Form>

            <Background/>
        </Container>
    );

}