import take from 'lodash/fp/take';
import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import filter from 'lodash/fp/filter';
import head from 'lodash/fp/head';
import reduce from 'lodash/fp/reduce';

import * as I from './Item';
import * as Helpers from './Helpers';
import { Item, Tableau, Card, Deck, CardState, ItemModifier } from './Types';

export const initialize = (deck: Deck, numPairs: number) => {
  return flow(
    x => Helpers.shuffleArray<Card>(x),
    map<Card, Item>(I.initialize)
  )(take<Card>(numPairs * 2, deck))
}

export const getItemState = (tableau: Tableau, item: Item): CardState => {
  return flow(
    filter<Item>(x => I.isSame(item, x)),
    head,
    x => x.cardState
  )(tableau);
};      

export const pairsFound = (tableau: Tableau): number => {  
  return filter<Item>(
    ({cardState}) => cardState == CardState.PAIRED,
    tableau
  ).length / 2;
};

export const complete = (tableau: Tableau): boolean => 
  pairsFound(tableau) * 2 == tableau.length;

export const changeItemState = (tableau: Tableau, item: Item, newState: CardState): Tableau => {
  return map<Item, Item>(
    it => I.isSame(item, it) ? {...item, cardState: newState} : it,
    tableau
  );
};

export const flipCard = (tableau: Tableau, gameCard: Item): Tableau =>
  changeItemState(tableau, gameCard, CardState.FACE_UP);  

export const resetCards = (tableau: Tableau, cards: Array<Item>): Tableau =>
  changeItemsState(tableau, cards, resetCard);

export const pairCards = (tableau: Tableau, cards: Array<Item>): Tableau =>
  changeItemsState(tableau, cards, pairCard);
  
const changeItemsState = (tableau: Tableau, items: Array<Item>, fn: ItemModifier): Tableau => 
  reduce<Item, Tableau>((t, it) => fn(t, it), tableau, items);

const resetCard = (tableau: Tableau, gameCard: Item): Tableau =>
  changeItemState(tableau, gameCard, CardState.FACE_DOWN);

const pairCard = (tableau: Tableau, gameCard: Item): Tableau =>
  changeItemState(tableau, gameCard, CardState.PAIRED);  
