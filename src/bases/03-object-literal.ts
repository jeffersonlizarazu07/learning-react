interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const iroman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 33,

  address: {
    postalCode: "ABC-584",
    city: "Bogotá",
  },
};

console.log(iroman);

const spiderman: Person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 22,

  address: {
    postalCode: 'ACD-965',
    city: 'New York'
  }
};

console.log(spiderman);
