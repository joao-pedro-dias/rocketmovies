import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Content } from "../../components/Content";

export function Home(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
        </Content>
        
      </main>
    </Container>
  );
}