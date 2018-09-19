import { Action, Item } from './Types';

export const selectItem = (item: Item): Action => {
  return {
    kind: 'SelectItem',
    item
  };
};

export const continuePlaying: Action = {
  kind: 'ContinuePlaying'
};

export const reset: Action = {
  kind: 'Reset'
};