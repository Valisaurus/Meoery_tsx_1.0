// import React from "react";
import * as PropTypes from "prop-types";
import { FinalMessageStyled, FinalMessageStyledParagraph } from "./styled";

interface FinalMessageProps {
  finalMessageText: string;
}

function FinalMessage({ finalMessageText }: FinalMessageProps) {
  return (
    <FinalMessageStyled>
      <FinalMessageStyledParagraph>
        {finalMessageText}
      </FinalMessageStyledParagraph>
    </FinalMessageStyled>
  );
}

FinalMessage.propTypes = {
  finalMessageText: PropTypes.string,
};

export default FinalMessage;
