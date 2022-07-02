import { Container } from "./styles";
import { Tag } from "../Tag";

export function Card( { title, icon: Icon, text }){
    return(
        <Container>
            <h2>{title}</h2>

            <Icon fill={"pink"} size={20}/>
            <Icon fill={"pink"} size={20}/>
            <Icon fill={"pink"} size={20}/>
            <Icon fill={"pink"} size={20}/>
            <Icon fill={"dark"} size={20}/>

            <p>{text}</p>

            <div>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
            </div>
        </Container>
    );
}