// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(arraySum(numbers));
//Different way
let sum1 = 0;
numbers.forEach((num) => (sum1 += num));
console.log(sum1);
//---------------------------------------------------
// Exercise 2 Section
const Book = {
  title: "Harry Potter and the Goblet of Fire",
  author: "J. K. Rowling",
  pages: 750,
  readCount: 0,
  info: function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, read " +
      this.readCount +
      " time(s)."
    );
  },
};

console.log(Book.info());
//-----------------------------------------------------
//Exercise 3 Section

let sentence = "The quick brown fox jumps over the lazy dog";
let arr1 = sentence.split(" ");
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i].split("").reverse().join(""));
}
let result = arr2.join(" ");

console.log(result);

//Different way

let x = sentence.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(x);

//-----------------------------------------------------
//Exercise 4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let result1 = [];
let csvArr = csvData.split(/,|\n/);
let headers = [csvArr[0], csvArr[1]];
csvArr = csvArr.slice(2);
for (let i = 0; i < csvArr.length; i += 2) {
  result1.push({
    [headers[0]]: csvArr[i],
    [headers[1]]: parseInt(csvArr[i + 1]),
  });
}
console.log(result1);
