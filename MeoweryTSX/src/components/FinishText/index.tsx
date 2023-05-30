// import React from "react";
import * as PropTypes from "prop-types";
import { FinalMessageStyled } from "./styled";

interface FinalMessageProps {
  finalMessageText: string;
}

function FinalMessage({ finalMessageText }: FinalMessageProps) {
  return (
    <FinalMessageStyled>
      <p>text={finalMessageText} </p>
    </FinalMessageStyled>
  );
}

FinalMessage.propTypes = {
  finalMessageText: PropTypes.string,
};

export default FinalMessage;
