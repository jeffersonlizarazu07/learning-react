interface Acount {
  userId: string;
  userName: string;
}

function greet(name: string): string {
  return `Hola ${name}`;
}

let message = greet("Goku");
console.log(message);

const greetArrow = (name: string): string => `Hola ${name}`;

message = greetArrow("Jefferson");
console.log(message);

function getUser(): Acount {
  return {
    userId: "ABC-123",
    userName: "Thompson",
  };
}

const user = getUser();
console.log(user);

// Funcion de flecha con return implicito ({})
const getUser2 = (): Acount => ({
  userId: "ABC-1234",
  userName: "Leopoldo",
});

const user2 = getUser2();
console.log(user2);

const numbers: number[] = [1, 2, 3, 4, 5];

// numbers.forEach(console.log);

// numbers.forEach(function (value) {
//   return console.log({ value });
// });

numbers.forEach((value): void => {
  console.log(value);
});

