// import React from "react";
import { CounterStyled } from "./styled";
import * as PropTypes from "prop-types";

interface CounterProps {
  counterText: string;
  turns: number;
}


function Counter({ counterText, turns }: CounterProps) {
  return (
    <CounterStyled>
      <p>{counterText} {turns}</p>
    </CounterStyled>
  );
}

Counter.propTypes = {
  counterText: PropTypes.string
};

export default Counter;
