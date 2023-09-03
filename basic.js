function bubbleSort(numbers) {
    var n = numbers.length;
    for (var i = 0; i < n - 1; i++) {
        console.log("I ==> index: ".concat(i, " value: ").concat(numbers[i]));
        for (var j = 0; j < n - i - 1; j++) {
            // console.log(`J ==> index: ${j} value: ${numbers[j]}`);
            if (numbers[j] > numbers[j + 1]) {
                var temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}
// const numbers = [3,1,7,5,2];
var numbers = [5, 9, 7, 2, 6];
var result = bubbleSort(numbers);
console.log('Result ====>');
console.log(result);
