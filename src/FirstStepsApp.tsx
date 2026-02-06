import { ItemCounter } from "./shopping-cart/itemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Play Station", quantity: 2 },
  { productName: "Nintendo Switch", quantity: 1 },
  { productName: "Xbox One", quantity: 1 },
  { productName: "PC", quantity: 2 },
  { productName: "Laptop", quantity: 1 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Play Station" quantity={0} />
      <ItemCounter name="Nintendo Switch" quantity={0} />
      <ItemCounter name="Xbox One" quantity={0} />
      <ItemCounter name="PC" quantity={1} />
      <ItemCounter name="Laptop" quantity={0} /> */}
    </>
  );
}
