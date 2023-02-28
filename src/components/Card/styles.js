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
        line-height: 20px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 300rem; /* exemplo de largura máxima */
    }

    > div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    > a{
        color: ${({ theme }) => theme.colors.white};
        line-height: 50px;
    }

    > a:hover{
        color: ${({ theme }) => theme.colors.pink};
    }
`;