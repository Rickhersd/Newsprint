
export default function editBoard<T>(position: number[], newValue: T, gameHistory: Game): void {
  const newRegister = gameHistory.gameHistory[ gameHistory.gameHistory.length - 1].map((row) => [...row]);
  newRegister[position[0]][position[1]] = newValue;
  gameHistory.register(newRegister);
}
