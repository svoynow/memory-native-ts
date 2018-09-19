import { 
  oneCardFlipped,
  twoCardsFlipped,
  notStarted,
  gameComplete
} from './State';
import {
  selectItem,
  continuePlaying,
  reset 
} from './Action';
import { 
  Action,
  Game,
  TurnState,
  CardState } from './Types';
import * as T from './Tableau';
import * as D from './Deck';
import * as I from './Item';


export const initialize = (): Game =>  {
  const deck = D.makeDeck();
  return {
    tableau: T.initialize(deck, 8),
    turnState: notStarted
  };
};

export const hasMatch = (state: TurnState): boolean => {
  let result = false;  
  let a, b;
  if (state.kind === 'TwoCardsFlipped') {
    [a, b] = state.items;
    result = I.isMatch(a, b);    
  };
  return result;  
};

// grr typescript
export const doAction = (action: Action, game: Game): Game => {
  const { turnState, tableau } = game;
  let newState = game;
  let newTableau;
  switch(action.kind) {    
  case 'SelectItem':
    switch(turnState.kind) {
    case 'NotStarted':
      if (T.getItemState(tableau, action.item) == CardState.FACE_DOWN) {
        newState = {
          tableau: T.flipCard(tableau, action.item),
          turnState: oneCardFlipped(action.item)
        };
      }
      break;
    case 'OneCardFlipped':
      if (T.getItemState(tableau, action.item) == CardState.FACE_DOWN) {
        newState = {
          tableau: T.flipCard(tableau, action.item),
          turnState: twoCardsFlipped(turnState.item, action.item)        
        };
      }
      break;    
    case 'TwoCardsFlipped':
    case 'GameComplete':
      newState = game;  
    }
  break;
  case 'ContinuePlaying':
    switch(turnState.kind) {
    case 'TwoCardsFlipped':
      newTableau = T.pairCards(tableau, turnState.items);
      newState = hasMatch(turnState) ? 
        {
          tableau: newTableau,
          turnState: T.complete(newTableau) ? gameComplete : notStarted
        } : 
        {
          tableau: T.resetCards(tableau, turnState.items),
          turnState: notStarted
        };
      break;  
    case 'NotStarted':
    case 'OneCardFlipped':
    case 'GameComplete':
      newState = game;
    }
  break;
  case 'Reset':
    newState = initialize();
    break;
  }
  return newState;
};

