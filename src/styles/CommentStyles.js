import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        min-height: 100%
    }
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
    }
`;

export const CommentContainerWrapper = styled.div`
    width: min(90%, 1140px);
    margin: 3rem auto;  
`;

export const CommentContainer = styled.div`
    position: relative;

    *:before{
        content: "";
        background-color: #CAC8C8;
        position: absolute;
        min-height: 100%;
        width: 1px;
        left: -10px;
    }

    &:not(:first-child) {
        margin-left: 3rem;
        margin-top: 1rem;
    }
`;

export const CommentCard = styled.div`
    padding: 20px;
    background-color: #EEEBDB;
    border: 1px solid #000000;
    border-radius: .5rem;
    min-width: 100%; 

    p{
        margin-bottom: 1rem;
    }
`;

export const CommentCardHeader = styled.div`
    display: flex;
    font-size: .85rem;
    opacity: .6;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
`;