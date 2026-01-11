import { heroes, type Hero, Owner } from "./data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });
  if (!hero) {
    throw new Error(`El heroe con el id ${id} no existe.`);
  }
  return hero;
};

console.log(getHeroById(4));

// Homework

export const getHeroesByOwner = (owner: Owner): Hero[] | undefined => {
  const heroByOwner = heroes.filter((heroByOwner) => {
    return heroByOwner.owner === owner;
  });

  if (!owner) {
    throw new Error(
      "El filtro no fue exitoso ya que la palabra filtrada no existe"
    );
  }

  return heroByOwner;
};
