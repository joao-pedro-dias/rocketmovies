import { Container, Content, Form, Section } from './styles';
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RiArrowLeftLine } from "react-icons/ri";
import { NoteItem } from '../../components/NoteItem';

export function CreateMovie(){
    return(
        <Container>
            <Header/>

            <Content>
                <Link
                    icon={RiArrowLeftLine}
                    title="Voltar"
                />

                <h1>Novo filme</h1>

                <Form>

                    <div className='inputs'>
                        <Input
                            placeholder="Título"
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>

                    <textarea
                        placeholder="Observações"
                    />

                </Form>

                    <Section>
                        <span>Marcadores</span>

                        <div>
                            <NoteItem value="React"/>
                            <NoteItem isNew/>
                            <NoteItem/>
                        </div>
                        
                    </Section>

                    <Button
                        title="Excluir filme"
                    />
                    <Button
                        title="Salvar alterações"
                    />

            </Content>
        </Container>
    );
}