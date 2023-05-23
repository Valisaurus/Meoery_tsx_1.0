import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

function Button({createDeck, buttonText}) {

  const handleClick = () => {
    createDeck();
  }

    return (
    <ButtonStyled className="start-btn" onClick={handleClick}>
      {buttonText}
    </ButtonStyled>
    )
};

Button.propTypes = {
  buttonText: PropTypes.string
};

export default Button;

