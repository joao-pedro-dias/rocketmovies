import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.colors.background_800};

    > header {
        grid-area: header;
        align-items: center;

        height: 105px;
        width: 100%;
        padding: 0 150px;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.colors.background_700};
        background: #272024;

        display: flex;
        justify-content: space-between;
    }

    
`;

export const Form = styled.form`
    max-width: 300px;
    margin: auto;

    > div:nth-child(3){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -65px auto 32px;

    width: 186px;
    height: 186px;

    > img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label{
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.colors.pink};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({ theme }) =>theme.colors.background_800};
        }
    }
`;