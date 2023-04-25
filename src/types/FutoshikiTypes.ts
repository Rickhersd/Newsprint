import { GameBoardCell } from "./types";

export type ComparisonType = {
  type: "top" | "left" | "right" | "bottom";
  value: 'wrong' | 'correct' | 'idle'; 
}

export type FutoshikiCellType = GameBoardCell<number> & { comparisons: ComparisonType[] | null};
export type FutoshikiBoardType = FutoshikiCellType[][];