let num: number = 12;
let str: string = "aa";

let foo: any = 12;
foo = "12";

const bool: boolean = false;

/// ------
interface Person {
  firstName: string;
  lastName: string;
  age: string | number;
}

interface ExampleUseEffectProps {
  a: number;
  b: string;
}

type PersonType = {
  firstName: string;
  lastName: string;
  age: string | number;
};

type TodoArgsType = { a: string; b: number };

const toDo = (obj: TodoArgsType) => {
  // obj.
};

const toDo2 = (obj: TodoArgsType): boolean => {
  return false;
};

const list: string[] = ["a", "b"];

const users: Person[] = [];

const user: Person = {
  firstName: "aaa",
  lastName: "bbb",
  age: 12,
};

interface PersonWithChildren extends Person {
  children: Person[];
}

const user2: PersonWithChildren = {
  firstName: "aaa",
  lastName: "bbb",
  age: 12,
  children: [],
};

// ------------------ useEffect ----------
const ExampleUseEffect = () => {};
