import styled from "styled-components";

export const Container = styled.input`
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 8px;

    height: 50px;
    width: 400px;
    
    border-radius: 10px;
    border-style: solid;
    border: transparent;
    
    background: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
`;