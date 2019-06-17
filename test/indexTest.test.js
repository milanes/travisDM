const { addTwoNumbers } = require("../src/js/index.js");

let result;
let total = 4;
describe("sumaNumeros", () => {
  it("launch", () => {
    result = addTwoNumbers(4, 4);
  });
  it("return"),
    () => {
      result.to.equals(total);
    };
});
