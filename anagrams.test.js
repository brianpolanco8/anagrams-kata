const fs = require("fs");
const anagrams = require("./anagrams");

let array = [];

beforeAll(async (done) => {
  array = fs.readFileSync("./wordlist.txt").toString().split("\n");

  done();
});

describe("should work", () => {
  test("should work", () => {
    expect(anagrams(array).count).toEqual(20683);
  });
});
