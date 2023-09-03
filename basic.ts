function bubbleSort (numbers: number[]): number[] {

  const n = numbers.length;

  for (let i = 0; i < n - 1; i++) {
    console.log(`I ==> index: ${i} value: ${numbers[i]}`);
    for (let j = 0; j < n - i -1; j++) {
      // console.log(`J ==> index: ${j} value: ${numbers[j]}`);
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
}

// const numbers = [3,1,7,5,2];
const numbers = [5,9,7,2,6];
const result: number[] = bubbleSort(numbers);
console.log('Result ====>');
console.log(result);