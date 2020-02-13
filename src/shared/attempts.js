export const getRandomTriad = () => {
  let triad = [];
  for (let i = 0; i < 3; i++) {
    let number;
    do {
      number = Math.round(Math.random() * 10);
    } while (triad.includes(number));
    triad.push(Math.round(Math.random() * 10));
  }
  console.log(triad);
  return triad;
};
