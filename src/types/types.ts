export type PositionType = {
  rowIndex: number
  cellIndex: number
}

export type GameBoardCell<T> = {
  value: T,
  state: 'correct' | 'wrong' | 'empty' | 'inactive'
}

export type GameBoardRow<G> = G[]
export type GameBoard<H> = GameBoardRow<H>[]
