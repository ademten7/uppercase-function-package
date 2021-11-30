function getUpperCase(str) {
  let newStrArray = str.split(" ").map((item) => {
    return item.substring(0, 1).toUpperCase().concat(item.substring(1));
  });
  let newStr = newStrArray.join(" ");
  return newStr;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

module.exports = { getUpperCase, isPalindrome };
