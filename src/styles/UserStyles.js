import styled, { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//     html {
//         font-size: 16px;
//         min-height: 100%
//     }
//     *, *:before, *:after {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//     }

//     body {
//         min-height: 100vh;
//     }
// `;

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-box-string: border-box;
                box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
                box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        background-color: #fafafe;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    center {
        display: block;
        text-align: -webkit-center;
    }
`;

export const UserContainerWrapper = styled.div`
    width: min(90%, 1140px);
    margin: 3rem auto;  
`;

export const UserContainer = styled.div`
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

export const UserCard = styled.div`
    padding: 20px;
    background-color: #EEEBDB;
    // border: 0.2px solid #000000;
    // border-radius: .5rem;
    min-width: 100%; 

    p{
        margin-bottom: 1rem;
    }
`;
