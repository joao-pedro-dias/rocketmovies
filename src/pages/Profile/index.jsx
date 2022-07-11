import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiCameraLine, RiMailLine, RiUser3Line, RiLock2Line } from "react-icons/ri";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export function Profile(){

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password:passwordOld
        }
        await updateProfile({ user });
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <RiArrowLeftLine/>
                    Voltar
                </Link>
            </header>

            <Avatar>
                <img
                    src="https://github.com/joao-pedro-dias.png"
                    alt="Foto do usuário"
                />

                <label htmlFor="avatar">
                    <RiCameraLine/>
                    <input
                        id="avatar"
                        type="file"
                    />
                </label>
                
            </Avatar>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={RiUser3Line}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={RiMailLine}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={RiLock2Line}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={RiLock2Line}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />

            </Form>
        </Container>
    );
}