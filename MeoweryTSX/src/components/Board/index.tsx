import { BoardStyled } from "./styled";


function Board({children}) {
  return <BoardStyled>{children}</BoardStyled>;
}

export default Board;
