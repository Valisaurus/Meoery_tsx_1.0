import { ReactNode } from 'react';

type Board = {
  children: ReactNode;
}
type CardData = {
  url: string;
  id: string;
  matched: boolean;
};

export type { Board, CardData };
