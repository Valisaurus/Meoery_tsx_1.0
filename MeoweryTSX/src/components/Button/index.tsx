import * as PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

interface ButtonProps {
  newGame: () => void;
  buttonText: string;
}

function Button({ newGame, buttonText }: ButtonProps) {
  const handleClick = () => {
    newGame();
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
