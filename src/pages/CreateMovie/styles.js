import styled from "styled-components";

export const Container = styled.div`
    overflow-y: auto;

    
`;

export const Content = styled.div`

    >span{
        font-size: 20px;
        color: #999591;
    }

    > a{
        color: ${({ theme }) => theme.colors.pink}
    }

    overflow-y: auto;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
    align-items: baseline;
    padding: 80px 150px 80px;

    .section-button{
        display: flex;
        width: 100%;
        gap: 50px;

        button{
            width: 100%;
            height: 56px;
            padding: 0 16px;
            margin-top: 16px;
            
            font-weight: 500;
            font-size: 16px;
            
            border: 0;
            border-radius: 10px;
        }

        .delete{
            background-color: #0D0C0F;
            color: ${({ theme }) => theme.colors.pink};
        }

        .save{
            background-color: ${({ theme }) => theme.colors.pink};
            color: ${({ theme }) => theme.colors.background_800};
        }

    }
    
`;

export const Form = styled.div`
    width: 100%;

    .inputs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
    }

    > textarea{
        resize: none;
        width: 100%;
        height: 300px;
        
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;

        border-radius: 10px;
        border-style: solid;
        border: transparent;

        background: ${({ theme }) => theme.colors.background_900};
        color: ${({ theme }) => theme.colors.white};
        font-size: 18px;
    }
`;

export const Section = styled.section`

    width: 100%;

    > div {
        
        display: flex;
        align-items: center;

        background-color: ${({ isNew }) => isNew ? "transparent": "#0D0C0F"};
        color: ${({ theme }) => theme.colors.gray_300};

        margin-bottom: 8px;
        border-radius: 10px;
        padding-right: 16px;
    }
    
    .tags{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
`;
