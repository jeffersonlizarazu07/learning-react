import { useState, type CSSProperties } from "react";

export interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(10);

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

  const handleAdd = () => {
    return setCount(count + 1);
  };

  const handleSubtract = () => {
    return setCount(count - 1);
  };

  return (
    <section style={myStyles}>
      <span style={nintendoSwitch}>{name}</span>
      <button onClick={handleSubtract}>-1</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
};
