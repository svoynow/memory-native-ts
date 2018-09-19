
import flatMap from 'lodash/fp/flatMap';
import flow from 'lodash/fp/flow';

import * as Helpers from './Helpers';
import { Animal, Card } from './Types'
import * as C from './Card';
import * as A from './Animal';

export const makeDeck = (): Array<Card> => {
  return flow(
    x => Helpers.shuffleArray<Animal>(x),
    flatMap(C.makePair)
  )(A.all);
};