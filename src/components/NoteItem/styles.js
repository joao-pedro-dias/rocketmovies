import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent": "#0D0C0F"};
    color: ${({ theme }) => theme.colors.gray_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_300}` : "none" };

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button{
        border: none;
        background: ${({ theme }) => theme.colors.background_900};
        color: ${({ theme }) => theme.colors.pink};
    }

    > input{
        margin: 16px;
        width: 150px;
        border-radius: 10px;
        height: 56px;
        background: ${({ theme }) => theme.colors.background_900};

        padding: 16px;
        color: ${({ theme }) => theme.colors.white};

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.colors.gray_300};
        }
    }
`;