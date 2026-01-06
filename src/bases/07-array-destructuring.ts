// const names: string[] = ["Jefferson", "Johan", "Luz", "Yamile", "Teresa"];
// const [, , , , name] = names;

// console.log({ name });

// const returnArrayFn = () => {
//   return ["ABC", 123] as const;
// };

// const [letters, numbers] = returnArrayFn();
// console.log(letters, numbers);

// Práctica

const useState = (value: string) => {
  return [
    value,
    (name: string) => {
      return console.log(name);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Vegeta");
