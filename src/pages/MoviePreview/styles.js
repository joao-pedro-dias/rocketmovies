import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    overflow-y: auto;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
    align-items: baseline;
    padding: 80px 150px 80px;

    > h1{
        font-size: 36px;
    }

    > header{
        display: flex;
        flex-direction: row;
        align-items: baseline;

        span{
            margin-left: 20px;

            svg{
                font-size: 24px;
                color: ${({ theme }) => theme.colors.pink};
            }
        }
    }

    > div{

        display: flex;
        flex-direction: row;
        align-items: baseline;

        span {
            margin-right: 10px;
            display: flex;
        }

        .icon{
            margin-right: 10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
    }

    .content{

        display: flex;
        flex-direction: column;

        p{
            margin-bottom: 50px;
            text-align: justify;
        }
    }

    > a{
        color: ${({ theme }) => theme.colors.pink};
        line-height: 50px;
    }

`;

