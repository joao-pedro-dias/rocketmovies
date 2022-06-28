import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.colors.background_800};
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main{
        grid-area: content;
    }
`;