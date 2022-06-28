import { Button } from "../Button";
import { Container, Title } from "./styles";
import { RiAddLine } from "react-icons/ri";
import { Card } from "../Card";

export function Content(){
    return(
        <Container>
            <Title>Meus filmes</Title>
            <Button icon={RiAddLine} title="Adicionar filme"/>
            <Card/>

        </Container>
    );
}