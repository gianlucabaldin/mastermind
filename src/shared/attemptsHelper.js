import React from "react";
import { DEFAULT_ATTEMPT_LENGTH, MAX_ATTEMPTS_NUM } from "./consts";
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
  // check if guessed
  if (count === DEFAULT_ATTEMPT_LENGTH) {
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

/**
 * Combination guessed: show the modal with total time and attempts
 */
const endGame = () => {
  const { attempts, startingTime } = store.getState().reducer;
  const diff = Date.now() - startingTime;
  const dateDiff = new Date(diff);
  debugger;
  const stringDiff =
    dateDiff.getDate() +
    " days, " +
    dateDiff.getHours() +
    " hours, " +
    dateDiff.getMinutes() +
    " minutes and " +
    dateDiff.getSeconds() +
    " seconds";
  store.dispatch(
    toggleModal({
      title: "Congratulations!",
      content: (
        <>
          <p>You guessed the number in {attempts.length} attempts!</p>
          <p>You took {stringDiff}.</p>
        </>
      )
    })
  );
};

/**
 * Check inputs - must be integer and in range [1-9]
 * @param {array} attempt the attempt
 */
export const checkInputsValues = attempt => {
  for (let n in attempt) {
    const element = attempt[n];
    if (isNaN(element) || element <= 0 || element > 9) {
      return false;
    }
  }
  return true;
};

/**
 * Look for repeated values within the attempt - not allowed in this game version
 * @param {array} attempt the attempt
 */
export const checkRepeteadValues = attempt => {
  const duplicateList = attempt.filter(
    (item, index) => attempt.indexOf(item) !== index
  );
  return duplicateList.length > 0;
};

/**
 * Method check the attempts number, and if it's equal to the MAX_ATTEMPTS_NUM
 * defined in const file, it will raise a modal to comunicate it and the secret
 * combination. Once the modal is dismissed, the application is reset to its
 * initialState
 */
export const checkAttempts = () => {
  const { attempts, secretTriad } = store.getState().reducer;
  if(attempts && attempts.length === MAX_ATTEMPTS_NUM){
    store.dispatch(
      toggleModal({
        title: "Yuo lost! :(",
        content: (
          <>
            <p>You haven't guessed the secret combination in {MAX_ATTEMPTS_NUM} attempts!</p>
            <p>You secret combination was {secretTriad}.</p>
          </>
        )
      })
    );
  }
}