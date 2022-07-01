import { Container } from "./styles";
import { RiAddLine, RiCloseLine } from "react-icons/ri";

export function NoteItem({ isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            >

            </input>
            
            <button
                type="button"
                onClick={onClick}
            >
                { isNew ? <RiAddLine/> : <RiCloseLine/>}
            </button>

        </Container>
    );
}