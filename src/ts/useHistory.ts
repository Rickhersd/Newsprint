import { ref, reactive, Ref } from 'vue'

export type RegisterStack<H> = H[]
export type GameBoard<S> = S[][]

export default function useHistory<GameBoard>(load?: RegisterStack<GameBoard>) {

  const gameHistory = reactive<RegisterStack<GameBoard>>( load ?? []) as RegisterStack<GameBoard>;
  const backup = ref(<RegisterStack<GameBoard>>([])) as Ref<RegisterStack<GameBoard>>;
  const inReading = ref<boolean>(false);

  const register = (register: GameBoard):void => {
    if (inReading.value) {
      recoverbackup();
      inReading.value = false;
    }
    gameHistory.push(register);
  }

  const back = (): void => {
    if (gameHistory.length <= 1) return;
    const lastItem: GameBoard = getLastItem(gameHistory);
    backup.value.push(lastItem);
    gameHistory.pop()
    inReading.value = true;
    console.log(gameHistory)
    console.log(' EN backup: ' + backup)
  }

  const next = (): void => {
    console.log(backup.value.length)

    if (!backup.value.length || inReading.value === false) return;
    const recoveredItem: GameBoard = getLastItem(backup.value)
    gameHistory.push(recoveredItem )
    backup.value.pop();
    console.log(gameHistory)
    console.log(' EN backup: ' + backup)
  }

  const getLastRegister = (): GameBoard => {
    return getLastItem(gameHistory);
  }

  const readAll = ():RegisterStack<GameBoard> => {
    return gameHistory;
  }

  const recoverbackup = (): void => {
    while (backup.value.length){
      const recoveredItem: GameBoard = getLastItem(backup.value);
      gameHistory.push(recoveredItem);
      backup.value.pop();
    }
  }

  const getLastItem = (stack:RegisterStack<GameBoard>): GameBoard => {
    return stack[stack.length - 1];
  }  

  return {
    gameHistory,
    register,
    next,
    back,
    getLastRegister,
    readAll
  }
}