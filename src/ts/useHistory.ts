import { ref, reactive, Ref } from 'vue'
export type RegisterStack<H> = H[]

export default function useHistory<GameBoard>(load?: RegisterStack<GameBoard>) {

  const gameHistory = reactive<RegisterStack<GameBoard>>( load ?? []) as RegisterStack<GameBoard>;
  const backup = ref(<RegisterStack<GameBoard>>([])) as Ref<RegisterStack<GameBoard>>;
  const inReading = ref<boolean>(false);
  const moves = ref<number>(1);

  const register = (register: GameBoard):void => {
    if (inReading.value) {
      recoverbackup();
      inReading.value = false;
    }
    gameHistory.push(register);
    moves.value++;
  }

  const back = (): void => {
    if (gameHistory.length <= 1) return;
    const lastItem: GameBoard = getLastItem(gameHistory);
    backup.value.push(lastItem);
    gameHistory.pop()
    inReading.value = true;
    moves.value--;
  }

  const next = (): void => {
    if (!backup.value.length || inReading.value === false) return;
    const recoveredItem: GameBoard = getLastItem(backup.value)
    gameHistory.push(recoveredItem )
    backup.value.pop();
    moves.value++;
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

  const reset = (): void => {
    while (gameHistory.length > 1){
      gameHistory.pop();
    } 
    moves.value = 1;
  }

  const getLastRegister = ():GameBoard => { 
    return gameHistory[gameHistory.length - 1]  
  }

  const getFirstRegister = ():GameBoard => {
    return gameHistory[0];
  }

  return {
    gameHistory,
    getLastRegister,
    getFirstRegister,
    moves,
    reset,
    register,
    next,
    back,
    readAll
  }
}