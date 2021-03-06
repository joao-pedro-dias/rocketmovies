import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    
    background: ${({ theme }) => theme.colors.background_800};
    
    > main{
        grid-area: content;
        overflow-y: auto;
    }
`;