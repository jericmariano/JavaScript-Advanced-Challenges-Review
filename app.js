function sortLowToHigh(numbers) {
   return numbers.sort((a, b) => b - a)
}

console.log(sortLowToHigh([1, 5, 0, 10, 4]))