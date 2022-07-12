import { Container, Content, Form, Section } from './styles';
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { RiArrowLeftLine } from "react-icons/ri";
import { NoteItem } from '../../components/NoteItem';
import { useState } from 'react';

export function CreateMovie(){

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    return(
        <Container>
            <Header/>

            <Content>
                <Link to="/">
                    <RiArrowLeftLine/>
                    Voltar
                </Link>

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

                <span>Marcadores</span>

                <Section>
                    
                    <div className='tags'>
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <NoteItem
                            isNew
                            placeholder="Nova tag"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                    
                </Section>
                    
                <div className='section-button'>
                    <button className='delete'>Excluir filme</button>
                    <button className='save'>Salvar alterações</button>
                </div>

            </Content>
        </Container>
    );
}