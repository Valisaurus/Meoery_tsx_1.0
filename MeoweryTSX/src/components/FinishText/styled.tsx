import styled from "styled-components";

export const FinalMessageStyled = styled.div`
  display: block;
  height: 50%;
  max-width: 50%;
  position: absolute;
  z-index: 99;
  background-color: rgb(255 236 250);
  border: 1px solid blue;
  border-radius: 2rem;
  box-shadow: rgb(0, 0, 255) 0px 10px 20px -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: color-fade;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;

  @keyframes color-fade {
    from {
      background-color: rgb(255 236 250);
    }
    to {
      background-color: rgb(255 254 235);
    }

  }
`;
export const FinalMessageStyledParagraph = styled.p`
  font-size: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
