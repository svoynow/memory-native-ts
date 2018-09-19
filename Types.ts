export enum Group {
  GROUP_A = "GROUP_A",
  GROUP_B = "GROUP_B"
};

export enum CardState {
  FACE_UP = "FACE_UP",
  FACE_DOWN = "FACE_DOWN",
  PAIRED = "PAIRED"
};

export interface Card  {
  animal: Animal;
  group: Group;
};

export type Deck = Array<Card>

export interface Item {
  card: Card,
  cardState: CardState
};

export type Tableau = Array<Item>;

export type ItemModifier = (t: Tableau, i: Item) => Tableau;

export interface NotStarted { 
  kind: "NotStarted"
};

export interface OneCardFlipped {
  kind: "OneCardFlipped";
  item: Item;
};

export interface TwoCardsFlipped {
  kind: "TwoCardsFlipped";
  items: [Item, Item]
};

export interface GameComplete {
  kind: "GameComplete"
};

export type TurnState = 
    NotStarted
  | OneCardFlipped
  | TwoCardsFlipped
  | GameComplete;

export interface SelectItem {
  kind: "SelectItem",
  item: Item;
};

export interface ContinuePlaying {
  kind: "ContinuePlaying";
};

export interface Reset {
  kind: "Reset";
};

export type Action =
    SelectItem
  | ContinuePlaying
  | Reset;

export interface Game {
  tableau: Tableau,
  turnState: TurnState
};

export type Situation = [TurnState, Action];

export enum Animal {
  Badger = "Badger",
  Bee = "Bee",
  Bird = "Bird",
  Butterfly = "Butterfly",
  Cat = "Cat",
  Chicken = "Chicken",
  Cow = "Cow",
  Crab = "Crab",
  Deer = "Deer",
  Dinosaur = "Dinosaur",
  Dog = "Dog",
  Dolphin = "Dolphin",
  Elephant = "Elephant",
  Duck = "Duck",
  Frog = "Frog",
  Gorilla = "Gorilla",
  Horse = "Horse",
  Kangaroo = "Kangaroo",
  Leopard = "Leopard",
  Lion = "Lion",
  Llama = "Llama",
  Octopus = "Octopus",
  Rhinoceros = "Rhinoceros",
  Shark = "Shark",
  Sheep = "Sheep",
  Snail = "Snail",
  Turtle = "Turtle",
  Whale = "Whale",
  Wolf = "Wolf"
 };