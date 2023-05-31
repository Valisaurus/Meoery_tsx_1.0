import { BoardStyled } from "./styled";
import { ReactNode } from 'react';


type PropsWithChildren<Props> = Props & { children: ReactNode };

function Board({children} : PropsWithChildren<{ children: ReactNode }>) {
  return <BoardStyled>{children}</BoardStyled>;
}

export default Board;
