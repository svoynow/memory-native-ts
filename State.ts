import { 
  Item,
  TurnState
} from './Types';

export const oneCardFlipped = (item: Item): TurnState => { 
  return {
    kind: "OneCardFlipped",
    item
  }
};

export const twoCardsFlipped = (a: Item, b: Item): TurnState => { 
  return {
    kind: "TwoCardsFlipped",
    items: [a, b]
  }
};

export const gameComplete: TurnState = {
  kind: 'GameComplete'
};

export const notStarted: TurnState = {
  kind: 'NotStarted'
};