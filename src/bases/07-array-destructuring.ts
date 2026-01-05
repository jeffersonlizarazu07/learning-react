const names: string[] = ["Jefferson", "Johan", "Luz", "Yamile", "Teresa"];
const [, , , , name] = names;

console.log({ name });

const returnArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArrayFn();
console.log(letters, numbers);