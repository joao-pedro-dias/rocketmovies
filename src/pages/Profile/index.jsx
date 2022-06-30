import { Container, Form, Avatar } from "./styles";
import { Link } from "../../components/Link";
import { RiArrowLeftLine, RiCameraLine } from "react-icons/ri";
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
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                />

                <Button
                    title="Salvar"
                />

            </Form>
        </Container>
    );
}