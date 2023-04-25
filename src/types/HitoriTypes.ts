import { GameBoardCell, GameBoardRow } from "./types";

export type HitoriValidCellValues = number;
export type HitoriCellType = GameBoardCell<HitoriValidCellValues> & { connectionKey: number };
export type HitoriRowType = GameBoardRow<HitoriCellType>;
export type HitoriBoardType = HitoriCellType[][];