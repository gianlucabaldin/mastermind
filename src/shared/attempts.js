import { DEFAULT_ATTEMPT_LENGTH } from "./consts";

export const getRandomTriad = () => {
  let triad = [];
  for (let i = 0; i < DEFAULT_ATTEMPT_LENGTH; i++) {
    let number;
    do {
      number = Math.round(Math.random() * 10);
    } while (triad.includes(number));
    triad.push(number);
  }
  return triad;
};

/**
 * Check if the attempt contains one or more number are present in the Secret Triad
 * but not at the right positions
 * @param {number} secretTriad
 * @param {number} attempt
 */
export const checkRightNumber = (secretTriad, attempt) => {
  let count = 0;
  for (let i = 1; i <= DEFAULT_ATTEMPT_LENGTH; i++) {
    let found = secretTriad.indexOf(attempt[i]);
    if (found === -1) continue;
    if (found !== i) count++;
  }
};

/**
 * Check if the attempt contains one or more number are present in the Secret Triad
 * at the right positions
 * @param {number} secretTriad
 * @param {number} attempt
 */
export const checkRightPosition = (secretTriad, attempt) => {
  let count = 0;
  for (let i = 1; i <= DEFAULT_ATTEMPT_LENGTH; i++) {
    let found = secretTriad.indexOf(attempt[i]);
    if (found === -1) continue;
    if (found === i) count++;
  }
};
