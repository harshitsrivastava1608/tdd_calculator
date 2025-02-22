import { getNegatives } from "./calculator.js";

class Calculate {
  #counter = 0;
  constructor() {}

  // addition function also increments counter
  add(sum, n) {
    ++this.#counter;
    return sum + n;
  }

  // main execution to calculate
  calculator = (...nums) => {
    try {
        // checking the negative numbers
      const arr = getNegatives(nums);
      if (arr.length > 0) {
        throw new Error(`Negatives not allowed ${arr}`);
      }
      let sum = 0;
      // finding out the sum
      for (let n of nums) {
        sum = this.add(sum, n);
      }
      console.log("sum", sum);
      return sum;
    } catch (err) {
      console.error(err.message);
    }
  };

  // returns count of add call
  getCalledCount() {
    return this.#counter;
  }

  // fixing of input arguments
  startCal=(str="")=>{
      const arrayOfInput=str.split(/[\n,]/).filter(x => x.trim() !== "").map(Number)
      console.log('aoi',arrayOfInput)
      this.calculator(...arrayOfInput)
  }
}
(function () {
  try {
    const calculate = new Calculate();
    console.log(process.argv)
    calculate.startCal(process.argv[2]);
    console.log("add called for ", calculate.getCalledCount(), " times");
  } catch (err) {
    console.log(err);
  }
})();
