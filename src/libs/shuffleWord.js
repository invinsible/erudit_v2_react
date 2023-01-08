import { getRandomIntInclusive } from './random';

export const shuffleWord = (str) => {
  let divideWord = str.split('');
    for (let i = divideWord.length - 1; i > 0; i--) {
      let random = getRandomIntInclusive(0, divideWord.length - 1);
      [divideWord[i], divideWord[random]] = [divideWord[random], divideWord[i]];
    }
    return divideWord;
};