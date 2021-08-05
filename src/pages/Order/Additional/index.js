import React, { useState } from 'react'
import ButtonOption from "../../../components/ButtonOption"
import ButtonAction from "../../../components/ButtonAction"
import { Content } from './styles'

export default function Additional({ additionals, selectAdditional, nextStep }) {

  const [selectedAdditional, setSelectedAdditional] = useState()

  function handleSelectAdditional(additional) {
    setSelectedAdditional(additional);
    selectAdditional(additional)
  }

  return (
    <Content>
      <h1>Personalize seu açai</h1>
      <h2>PERSONALIZAÇÃO:</h2>
      <div>
        {
          additionals && additionals.map(additional => <ButtonOption
            onClick={() => {
              handleSelectAdditional(additional)
            }}
            title={additional.name}
            selected={additional.name == selectedAdditional?.name} />
          )
        }
      </div>
      <div id="btnAction">
        <ButtonAction title="Finalizar pedido" onClick={nextStep} />
      </div>
    </Content>
  )
}
