import React, { useState } from 'react'
import FlavorAndSize from './FlavorAndSize'
import { Content } from './styles'


export default function Order() {

  const [step, setStep] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  function handleSelectedFlavor(flavor) {
    setSelectedFlavor(flavor);
  }

  function handleSelectedSize(size) {
    setSelectedSize(size);
  }

  function renderSteps() {
    switch (step) {
      case 1:
        return (
          <FlavorAndSize
            flavors={["Morango", "Banana", "Kiwi"]}
            sizes={["Pequeno(300ml)", "Medio(500ml)", "Grande(700ml)"]}
            selectFlavor={handleSelectedFlavor}
            selectSize={handleSelectedSize}
            nextStep={() => {
              alert("adasd")
              setStep(2)
            }}
          />
        );
      case 2:
        return null;
      case 3:
        return null;
      default:
        break;
    }
  }
  return (
    <Content>
      {
        renderSteps()
      }
    </Content>
  )
}
