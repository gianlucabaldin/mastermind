import {
  checkRightNumberWrongPosition,
  checkRightNumberRightPosition
} from "./coreFunctions";

/**
 *  Test all the possibile combinations for both algorithms having 3 slots and 3 possibilities:
 *
 *  - wrong number
 *  - right number in wrong positions
 *  - right number in right position
 *
 *  Notes:
 *  - RNWP stands for Right Number in Wrong Position
 *  - RNRP stands for Right Number in Right Position
 *  - %j stands for element in JSON format
 *  - %i stands for integer
 *  - the params in the test description are read serialized
 *  - in this version with no repetitions allowed, the version RNWP=1/RNRP=2 and RNWP=2/RNRP=1 can't happen
 *
 *  For the documentation see https://jestjs.io/docs/en/api#1-testeachtablename-fn-timeout
 */
describe("test counter algorithm", () => {
  test.each([
    // RNWP = 0, RNRP = 0
    [[1, 2, 3], [4, 5, 6], 0, 0], // ---
    // RNWP = 1, RNRP = 0
    [[1, 2, 3], [2, 5, 6], 1, 0], // W--
    [[1, 2, 3], [4, 1, 6], 1, 0], // -W-
    [[1, 2, 3], [4, 5, 1], 1, 0], // --W
    // RNWP = 2, RNRP = 0
    [[1, 2, 3], [3, 5, 1], 2, 0], // W-W
    [[1, 2, 3], [2, 1, 6], 2, 0], // WW-
    [[1, 2, 3], [4, 1, 2], 2, 0], // -WW
    // RNWP = 3, RNRP = 0
    [[1, 2, 3], [3, 1, 2], 3, 0], // WWW
    // RNWP = 0, RNRP = 1
    [[1, 2, 3], [1, 5, 6], 0, 1], // R--
    [[1, 2, 3], [4, 2, 6], 0, 1], // -R-
    [[1, 2, 3], [4, 5, 3], 0, 1], // --R
    // RNWP = 0, RNRP = 2
    [[1, 2, 3], [1, 2, 6], 0, 2], // RR-
    [[1, 2, 3], [1, 6, 3], 0, 2], // R-R
    [[1, 2, 3], [4, 2, 3], 0, 2], // --R
    // RNWP = 0, RNRP = 3
    [[1, 2, 3], [1, 2, 3], 0, 3], // RRR
    // RNWP = 1, RNRP = 1
    [[1, 2, 3], [1, 6, 2], 1, 1], // R-W
    [[1, 2, 3], [1, 3, 6], 1, 1], // RW-
    [[1, 2, 3], [3, 2, 6], 1, 1], // WR-
    [[1, 2, 3], [2, 5, 3], 1, 1], // W-R
    [[1, 2, 3], [6, 2, 1], 1, 1], // -RW
    [[1, 2, 3], [6, 1, 3], 1, 1]  // -WR
  ])(
    `case (%j, %j) --> RNWP() should count %i, RNRP() should count %i`,
    (combination, attempt, expectedRNWPCount, expectedRNRPCount) => {
      expect(checkRightNumberWrongPosition(combination, attempt)).toBe(
        expectedRNWPCount
      );
      expect(checkRightNumberRightPosition(combination, attempt)).toBe(
        expectedRNRPCount
      );
    }
  );
});
