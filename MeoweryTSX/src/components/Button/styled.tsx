import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: rgb(255, 200, 240);
    padding: 25px;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
