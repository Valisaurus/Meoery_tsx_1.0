import styled from "styled-components";

export const FinalMessageStyled = styled.div`
  display: block;
  height: 50%;
  max-width: 50%;
  position: absolute;
  z-index: 99;
  background-color: rgb(255 236 250);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: example;
  animation-duration: 4s;

  @keyframes example {
    from {
      background-color: red;
    }
    to {
      background-color: yellow;
    }
  }
`;
export const FinalMessageStyledParagraph = styled.p`
  font-size: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
