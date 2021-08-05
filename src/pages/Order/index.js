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

const SIZES = [
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

const ADDITIONALS = [
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

  function handleSelectedAdditional(additional) {
    setSelectedAdditional(additional);
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
            flavors={FLAVORS}
            sizes={SIZES}
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
            additionals={ADDITIONALS}
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
            additional={selectedAdditional}
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
