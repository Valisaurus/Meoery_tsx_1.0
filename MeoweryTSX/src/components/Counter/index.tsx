import { CounterStyled } from "./styled";
import PropTypes from "prop-types";

function Counter({ counterText, turns }) {
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
