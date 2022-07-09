import { useState } from "react";
import { Container, Form, ButtonForm, Background } from "./styles";
import { Input } from "../../components/Input";
import { RiUser3Line, RiArrowLeftLine, RiMailLine, RiLock2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        });

        navigate("/")
    }

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
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={RiMailLine}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={RiLock2Line}
                    onChange={e => setPassword(e.target.value)}
                />

                <ButtonForm onClick={handleSignUp}>
                    Cadastrar
                </ButtonForm>

                <Link to="/">
                    <RiArrowLeftLine/>
                    Voltar para o login
                </Link>

            </Form>

            <Background/>
        </Container>
    );

}