import { Container } from './styles';

export function Button({ title, icon: Icon }){
    return(
        
        <Container type="button">
            <Icon size={20} />
            {title}
        </Container>
    );
}