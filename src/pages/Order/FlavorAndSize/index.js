import React from 'react'
import ButtonOption from "../../../components/ButtonOption"
import ButtonAction from "../../../components/ButtonAction"
import { Content } from './styles'

export default function FlavorAndSize({ flavors, sizes, selectFlavor, selectSize, nextStep }) {
  return (
    <Content>
      <h1>Escolha seu açai</h1>
      <h2>SABOR:</h2>
      <div>
        {
          flavors && flavors.map(flavor => <ButtonOption title={flavor} />
          )
        }
      </div>
      <h2>TAMANHO:</h2>
      <div>
        {
          sizes && sizes.map(size => <ButtonOption title={size} />
          )
        }
      </div>
      <div>
        <ButtonAction title="Avançar" />
      </div>
    </Content>
  )
}
