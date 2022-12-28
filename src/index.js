////Counting duplicate characters #
//Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

const findDuplicates = (str) => {
  let result = {};
  str = [...str].sort();
  for (const i of str) {
    if (result[i] > 0) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }
  return result;
};

console.log(findDuplicates("adsjfdsfsfjsdjfhacabcsbajda"));

////Finding the first non-repeated character
//Input: "cbcbdde"
//Output: e

const nonRepeatCharcters = (str) => {
  for (const i of str) {
    const count = [...str].filter((item) => item === i).length;
    if (count === 1) return i;
  }
};

//Reversing letters and words
const sentenceReverse = (str) => {
  let output = "";
  const strArr = str.split(" ");
  strArr.map((item) => {
    output = output + " " + item.split("").reverse().join("");
  });
  return output;
};

console.log(nonRepeatCharcters("cbcbdde"));
console.log(nonRepeatCharcters("ahdadhj"));
console.log(sentenceReverse("I evol uoy os !hcum"));
