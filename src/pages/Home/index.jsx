import { Header } from '../../components/Header';
import { Container } from "./styles";
import { Content } from "../../components/Content";
import { Card } from '../../components/Card';

export function Home(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <Card/>  
          
        </Content>
        
      </main>
    </Container>
  )
}