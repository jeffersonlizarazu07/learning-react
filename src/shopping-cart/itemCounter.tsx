import type { CSSProperties } from "react";

export interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const myStyles: CSSProperties = {
    display: "flex",
    gap: 10,
  };

  const nintendoSwitch: CSSProperties = {
    width: 150,
  };

  const handleClick = () => {
    console.log(`Click en ${name}`);
  };

  return (
    <section style={myStyles}>
      <span style={nintendoSwitch}>{name}</span>
      <button onClick={handleClick}>-1</button>
      <span>{quantity}</span>
      <button>+1</button>
    </section>
  );
};
