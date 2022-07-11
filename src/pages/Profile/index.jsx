import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiCameraLine, RiMailLine, RiUser3Line, RiLock2Line } from "react-icons/ri";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Profile(){

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [ avatar, setAvatar ] = useState(avatarUrl);
    const [ avatarFile, setAvatarFile ] = useState(null);

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password:passwordOld
        }
        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
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
                    src={avatar}
                    alt="Foto do usuário"
                />

                <label htmlFor="avatar">
                    <RiCameraLine/>
                    <input
                        id="avatar"
                        type="file"
                        onChange={handleChangeAvatar}
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