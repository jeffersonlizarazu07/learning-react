const person = {
  name: "Jefferson",
  age: 33,
  key: "Rap4ever",
};

const { name, age, key } = person;
console.log({ name, age, key });

interface Hero {
  age: number;
  key: string;
  name: string;
  rank?: string;
}

const useContext = ({ age, key, name, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },

    rank: rank,
  };
};

const { rank: rango, keyName: apodo, user } = useContext(person);
const { name: nombre } = user;
console.log({ rango, apodo, nombre });
