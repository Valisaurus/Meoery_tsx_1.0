import * as PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

interface ButtonProps {
  createBoard: () => void;
  buttonText: string;
}

function Button({ createBoard, buttonText }: ButtonProps) {
  const handleClick = () => {
    createBoard();
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
