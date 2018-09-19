import { Animal, Group, Card } from './Types';
import * as A from './Animal';

const makeCard = (animal: Animal, group: Group) => {
  return { 
    animal,
    group 
  };
}

export const makePair = (animal: Animal): Array<Card> => 
  [
    makeCard(animal, Group.GROUP_A), 
    makeCard(animal, Group.GROUP_B)
  ];

export const image = ({ animal }: Card) => A.requireImage(animal);

export const key = ({ group, animal }: Card): string => 
  `${group}${animal}`;

export const isMatch = ({ animal: a }: Card, { animal: b }: Card): boolean => 
  a === b;

export const isSameCard = ({ animal: a, group: x }: Card, { animal: b, group: y }: Card): boolean =>
  a === b && x === y;  
