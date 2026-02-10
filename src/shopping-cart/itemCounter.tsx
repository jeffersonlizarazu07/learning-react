import { useState } from "react";
import "./itemCounter.css";

export interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    return setCount(count + 1);
  };

  const handleSubtract = () => {
    return setCount(count - 1);
  };

  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{ color: count === 1 ? "red" : "black" }}
      >
        {name}
      </span>
      <button onClick={handleSubtract}>-1</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
};
