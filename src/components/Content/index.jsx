import { Button } from "../Button";
import { Container, Title } from "./styles";
import { RiAddLine, RiStarFill, RiStarLine } from "react-icons/ri";
import { Card } from "../Card";


export function Content(){
    return(
        <Container>
            <Title>Meus filmes</Title>
            <Button icon={RiAddLine} title="Adicionar filme"/>
            <Card
                title="Insterestellar" icon={RiStarFill}
                text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
            />

        </Container>
    );
}