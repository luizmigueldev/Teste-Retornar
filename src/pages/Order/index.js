import React, { useState } from 'react'
import FlavorAndSize from './FlavorAndSize'
import Additional from './Additional'
import { Content } from './styles'


export default function Order() {

  const [step, setStep] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAdditional, setSelectedAdditional] = useState("");

  function handleSelectedFlavor(flavor) {
    setSelectedFlavor(flavor);
  }

  function handleSelectedSize(size) {
    setSelectedSize(size);
  }

  function handleSelectedAdditional(additionals) {
    setSelectedAdditional(additionals);
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
              setStep(2)
            }}
          />
        );
      case 2:
        return (
          <Additional
            additionals={["Granola", "Paçoca", "Leite ninho"]}
            selectAdditional={handleSelectedAdditional}
            nextStep={() => {
              setStep(3)
            }}
          />
        );
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
