import { Container, TitleCard, Paragraph } from "./styles";
import { Tag } from "../Tag";

export function Card( { title, icon: Icon, text }){
    return(
        <Container>
            <TitleCard>{title}</TitleCard>
            <Icon size={20}/>
            <Icon size={20}/>
            <Icon size={20}/>
            <Icon size={20}/>
            <Icon size={20}/>

            <Paragraph>
                {text}
            </Paragraph>
            <Tag title="Ficção Científica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
        </Container>
    );
}