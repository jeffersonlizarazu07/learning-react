import { ItemCounter } from "./shopping-cart/itemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      <ItemCounter name="Play Station" quantity={0} />
      <ItemCounter name="Nintendo Switch" quantity={0} />
      <ItemCounter name="Xbox One" quantity={0}/>
      <ItemCounter name="PC" quantity={1} />
      <ItemCounter name="Laptop" quantity={0} />
    </>
  );
}
