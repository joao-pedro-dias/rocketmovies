import styled from "styled-components";

export const Container = styled.div`
    
    margin-top: 10px;
    padding: 32px;

    width: 100%;
    height: auto;
    
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

    > div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;