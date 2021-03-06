import { Container, Content, Form, Section } from './styles';
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { RiArrowLeftLine } from "react-icons/ri";
import { NoteItem } from '../../components/NoteItem';
import { useState } from 'react';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function CreateMovie(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }


    async function handleNewMovie(){

        
        if(!title){
            return alert("Digite o título do filme");
        }
        
        if(!note){
            return alert("Digite a nota do filme");
        }

        if(!description){
            return alert("Digite a observação do filme");
        }
        
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }

        //alterar de notes para movie        
        await api.post("/notes", {
            title,
            note,
            description,
            tags
        });

        alert("Novo filme criado com sucesso!");
        navigate("/");
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
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setNote(e.target.value)}
                        />
                    </div>

                    <textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
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
                    <button
                        className='save'
                        onClick={handleNewMovie}
                    >Salvar alterações</button>
                </div>

            </Content>
        </Container>
    );
}