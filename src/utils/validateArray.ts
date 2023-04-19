const validateArray = (array:number[]) => {

  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const checkArray: number[] = [];

  let isValid = true;

  array.forEach((value:number) => {
    if (checkArray.includes(value)) {
      isValid = false;
    }
    checkArray.push(value);
  });

  range.forEach((digit) => {
    if (!checkArray.includes(digit)) {
      isValid = false;
    }
  });

  return isValid;
};

export default validateArray;