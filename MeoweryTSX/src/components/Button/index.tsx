import * as PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

interface ButtonProps {
  createDeck: () => void;
  buttonText: string;
}

function Button({ createDeck, buttonText }: ButtonProps) {
  const handleClick = () => {
    createDeck();
  };

  return (
    <ButtonStyled className="start-btn" onClick={handleClick}>
      {buttonText}
    </ButtonStyled>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
};

export default Button;
