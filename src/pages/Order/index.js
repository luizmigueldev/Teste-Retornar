import React, { useState, useEffect } from 'react'
import FlavorAndSize from './FlavorAndSize'
import Additional from './Additional'
import { Content } from './styles'
import Checkout from './Checkout';

const FLAVORS = [
  {
    name: "Morango",
    time: 0,
    price: 0
  },
  {
    name: "Banana",
    time: 0,
    price: 0
  },
  {
    name: "Kiwi",
    time: 0,
    price: 0
  },
]

const SIZE = [
  {
    name: "Pequeno (300ml)",
    time: 5,
    price: 10
  },
  {
    name: "Médio (500ml)",
    time: 7,
    price: 12
  },
  {
    name: "Grande (700ml)",
    time: 9,
    price: 15
  },
]

const SIZE = [
  {
    name: "Granola",
    time: 0,
    price: 3
  },
  {
    name: "Paçoca",
    time: 0,
    price: 3
  },
  {
    name: "Leite Ninho",
    time: 0,
    price: 3
  },
]


export default function Order() {

  const [step, setStep] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAdditional, setSelectedAdditional] = useState("");

  useEffect(() => {

    step === 1 && resetState()

  }, [step])

  function handleSelectedFlavor(flavor) {
    setSelectedFlavor(flavor);
  }

  function handleSelectedSize(size) {
    setSelectedSize(size);
  }

  function handleSelectedAdditional(additionals) {
    setSelectedAdditional(additionals);
  }

  function resetState() {
    setSelectedFlavor("");
    setSelectedSize("");
    setSelectedAdditional("");
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
        return (
          <Checkout
            flavor={selectedFlavor}
            size={selectedSize}
            additionals={selectedAdditional}
            nextStep={() => {
              setStep(1)
            }}
          />
        );
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
