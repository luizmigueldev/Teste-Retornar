import React from "react";
import Button from "./components/MyButton"
import { ButtonAction, ButtonOption } from "./styles";

export default function App() {

  function click() {
    alert("Vaaiiiiii fé no pai")
  }

  return (
    <>
      <Button title="Morango" onClick={click} ></Button>
      <ButtonAction title="Banana" onClick={click} ></ButtonAction>
      <ButtonOption title="Maça" onClick={click} ></ButtonOption>
    </>
  );
}


