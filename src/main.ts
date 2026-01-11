import "./style.css";
import "./bases/08-imp-exp";
import { getHeroesByOwner } from "./bases/08-imp-exp";
import { Owner } from "./bases/data/heroes.data";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Hola mundo</h1>
`;
console.log(getHeroesByOwner(Owner.DC));
console.log(getHeroesByOwner(Owner.Marvel));
// console.log(getHeroesByOwner(Owner.CC))