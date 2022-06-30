import { Container } from "./styles";

export function Link({title, icon: Icon}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
} 