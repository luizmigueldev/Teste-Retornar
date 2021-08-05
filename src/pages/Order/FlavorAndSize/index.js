import React, { useState } from 'react'
import ButtonOption from "../../../components/ButtonOption"
import ButtonAction from "../../../components/ButtonAction"
import { Content } from './styles'

export default function FlavorAndSize({ flavors, sizes, selectFlavor, selectSize, nextStep }) {

  const [selectedFlavor, setSelectedFlavor] = useState()
  const [selectedSize, setSelectedSize] = useState()

  function handleSelectFlavor(flavor) {
    setSelectedFlavor(flavor);
    selectFlavor(flavor)
  }

  function handleSelectSize(size) {
    setSelectedSize(size);
    selectSize(size)
  }

  return (
    <Content>
      <h1>Escolha seu açai</h1>
      <h2>SABOR:</h2>
      <div>
        {
          flavors && flavors.map(flavor => <ButtonOption
            onClick={() => {
              handleSelectFlavor(flavor)
            }}
            title={flavor}
            selected={flavor == selectedFlavor} />
          )
        }
      </div>
      <h2>TAMANHO:</h2>
      <div>
        {
          sizes && sizes.map(size => <ButtonOption
            onClick={() => {
              handleSelectSize(size)
            }}
            title={size}
            selected={size == selectedSize} />
          )
        }
      </div>
      <div>
        <ButtonAction title="Avançar" onClick={nextStep} />
      </div>
    </Content>
  )
}
