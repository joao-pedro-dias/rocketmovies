import { Container, Button } from "./styles";
import { RiAddLine, RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from "../Card";

export function Content(){
    return(
        <Container>
            <h1>Meus filmes</h1>
            <Link to="/createmovie">
                <Button>
                    <RiAddLine/>
                    
                        Adicionar filme
                    
                </Button>
            </Link>

            <Card
                title="Insterestellar" icon={RiStarFill}
                text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
                agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
                com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está
                assombrado por um fantasma que tenta se..."
            />

            <Card
                title="Insterestellar" icon={RiStarFill}
                text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
                agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
                com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está
                assombrado por um fantasma que tenta se..."
            />
        </Container>
    );
}