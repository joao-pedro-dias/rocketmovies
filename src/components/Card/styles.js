import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    padding: 32px;

    width: 100%;
    height: 230px;
    
    background: #272024;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};

    > h2{
        padding-bottom: 15px;
    }

    > p{
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;