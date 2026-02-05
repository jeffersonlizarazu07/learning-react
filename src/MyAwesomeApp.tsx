import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {
  const firsName = "Jefferson";
  const lastName = "Lizarazu";

  const favoriteGames = ["LOL", "TFT", "Summoners War"];
  const isActive = true;

  const address = { zipCode: "ABC-123", country: "Colombia" };

  const myStyles: CSSProperties = { backgroundColor: "red", borderRadius: 10, padding: 10 };
  return (
    <>
      <h1>{firsName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
