import { Container, Form, Avatar } from "./styles";
import { Link } from "../../components/Link";
import { RiArrowLeftLine, RiCameraLine, RiMailLine, RiUser3Line, RiLock2Line } from "react-icons/ri";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <Link
                    icon={RiArrowLeftLine}
                    title="Voltar"
                />
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
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={RiMailLine}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={RiLock2Line}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={RiLock2Line}
                />

                <Button
                    title="Salvar"
                />

            </Form>
        </Container>
    );
}