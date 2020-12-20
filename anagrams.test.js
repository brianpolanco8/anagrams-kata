const fs = require("fs");
const anagrams = require("./anagrams");

let array = [];

beforeAll(async (done) => {
  // Do whatever you need to do
  // fs.readFile("./wordlist.txt", function (err, data) {
  //   if (err) throw err;
  //   const words = data.toString().split("\n");

  //   console.log("words", words);
  // });

  array = fs.readFileSync("./wordlist.txt").toString().split("\n");

  done();
});

describe("should work", () => {
  //   console.log(list);
  test("should work", () => {
    expect(anagrams(array).count).toEqual(20683);
  });
});
