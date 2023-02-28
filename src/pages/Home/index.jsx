import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Content } from "../../components/Content";
import { useState } from "react";

export function Home(){
  const [searchTerm, setSearchTerm] = useState('');

  return(
    <Container>
      <Header onSearch={setSearchTerm} />
      <main>
        
        <Content searchTerm={searchTerm} />
        
      </main>
    </Container>
  );
}