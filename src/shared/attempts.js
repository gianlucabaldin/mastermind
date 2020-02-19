import { DEFAULT_ATTEMPT_LENGTH } from "./consts";
import { store } from "../index";
import { toggleModal } from "../store/actions/mastermindActions";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const getRandomTriad = () => {
  let triad = [];
  for (let i = 0; i < DEFAULT_ATTEMPT_LENGTH; i++) {
    let randomInt;
    do {
      randomInt = getRandomInt(1, 10);
    } while (triad.includes(randomInt));
    triad.push(randomInt);
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
  for (let i = 0; i < DEFAULT_ATTEMPT_LENGTH; i++) {
    let found = secretTriad.indexOf(attempt[i]);
    if (found === -1) continue;
    if (found === i) count++;
  }

  if (count === 3) {
    endGame();
  }
  return count;
};

/**
 * Check if the attempt contains one or more number are present in the Secret Triad
 * at the right positions
 * @param {number} secretTriad
 * @param {number} attempt
 */
export const checkRightPosition = (secretTriad, attempt) => {
  let count = 0;
  for (let i = 0; i < DEFAULT_ATTEMPT_LENGTH; i++) {
    let found = secretTriad.indexOf(attempt[i]);
    if (found === -1) continue;
    if (found !== i) count++;
  }
  return count;
};

const endGame = () => {
  let { attempts } = store.getState().reducer;
  store.dispatch(
    toggleModal({
      title: "Congratulations!",
      content: `You guessed the number in ${attempts.length} attempts!`
    })
  );
};
