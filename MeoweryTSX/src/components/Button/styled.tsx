import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: rgb(255 236 250);
    padding: 25px;
    border: 1px solid blue;
    border-radius: 30px;
    font-family: 'Arvo';
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: transform .5s ease-in-out;

    &:hover {
       transform: translateY(-8px);
    }

`;
