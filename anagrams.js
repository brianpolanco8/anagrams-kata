const fs = require("fs");

var anagrams = function (wordlist) {
  const cache = {};
  wordlist.forEach((str) => {
    const key = str.split("").sort().join("").trim();

    if (cache[key]) {
      cache[key].push(str);
    } else {
      cache[key] = [str];
    }
  });

  // to get the quantity of anagrams
  //   return Object.values(cache).filter((el) => el.length > 1).length;

  // to get all anagrams
  // return Object.values(cache).filter((el) => el.length > 1);

  return {
    count: Object.values(cache).filter((el) => el.length > 1).length,
    anagrams: Object.values(cache).filter((el) => el.length > 1),
  };
};

fs.readFile("./wordlist.txt", function (err, data) {
  if (err) throw err;
  var wordslist = data.toString().split("\n");

  //   console.log(anagrams(wordslist).count);
});

module.exports = anagrams;
