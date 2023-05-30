import { ScoreStyled } from "./styled";
import * as PropTypes from "prop-types";

interface ScoreProps {
  scoreText: string;
  score: number;
}


function Score({ scoreText, score }: ScoreProps) {
  return (
    <ScoreStyled>
      <p>{scoreText} {score}</p>
    </ScoreStyled>
  );
}

Score.propTypes = {
  scoreText: PropTypes.string,
  points: PropTypes.number,
};

export default Score;
