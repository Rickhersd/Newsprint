import { GameBoardCell, GameBoardRow } from "./types";

export type ComparisonType = {
  type: "top" | "left" | "right" | "bottom";
  state: 'wrong' | 'correct' | 'idle'; 
}

export type FutoshikiCellType = GameBoardCell<number> & { comparisons: ComparisonType[] | null};
export type FutoshikiBoardType = FutoshikiCellType[][];