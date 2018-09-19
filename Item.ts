import { Item, Card, CardState } from './Types';
import * as C from './Card';

const faceDownImage = require('./images/blue.png');
const pairedImage = require('./images/x.png');

export const isMatch = ({card: a}: Item, {card: b}: Item): boolean => C.isMatch(a, b);
export const isSame = ({card: a}: Item, {card: b}: Item): boolean => C.isSameCard(a, b);

export const initialize = (card: Card): Item => {
  return {
    card,
    cardState: CardState.FACE_DOWN
  };
};

export const image = ({cardState, card}: Item) => {
  let src;
  let animal = C.image(card);
  switch(cardState) {
  case CardState.FACE_UP:
    src = animal;
    break;
  case CardState.FACE_DOWN:
    src = faceDownImage;
    break;
  case CardState.PAIRED:
    src = pairedImage;
    break;
  default:
    src = animal;
  }
  return src;
};

