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
    const [rating, setRating] = useState("");

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
        
        if(!rating){
            return alert("Digite a nota do filme");
        }

        if(rating > 5 || rating == '' || isNaN(rating)){
            return alert("A nota deve ser entre 0 a 5. Tente novamente!")
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
            description,
            rating,
            tags
        });

        alert("Novo filme criado com sucesso!");
        navigate("/");
    }

    function handleClearAll() {
        setTitle("");
        setDescription("");
        setRating("");
        setTags([]);
        setNewTag("");
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
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <textarea
                        placeholder="Observações"
                        value={description}
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
                    <button
                        className='delete'
                        onClick={handleClearAll}
                    >Limpar tudo</button>
                    <button
                        className='save'
                        onClick={handleNewMovie}
                    >Salvar alterações</button>
                </div>

            </Content>
        </Container>
    );
}