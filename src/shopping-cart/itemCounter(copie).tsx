import type { CSSProperties } from "react";

export const ItemCounter = () => {
  const myStyles: CSSProperties = {
    display: "flex",
    width: 600,
    gap: 10,
    flexDirection: "column",
  };

  const nintendoSwitch: CSSProperties = {
    width: 150,
  };

  const products = [
    "Nintendo Switch 2",
    "Play Statin 5",
    "Xbox One",
    "PC",
    "Laptop",
  ];

  for (let i = 0; i < products.length; i++) {
    const product: string = products[i];
  }
  return (
    <section style={myStyles}>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <span style={nintendoSwitch}>{product}</span>
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
          </div>
        );
      })}
    </section>
  );
};
