import React, { useState } from 'react'
import ButtonOption from "../../../components/ButtonOption"
import ButtonAction from "../../../components/ButtonAction"
import { Content } from './styles'

export default function Checkout({ flavor, size, additionals, nextStep }) {

  const [selectedAdditional, setSelectedAdditional] = useState("Paçoca")
  const [selectedFlavor, setSelectedFlavor] = useState("Maça")
  const [selectedSize, setSelectedSize] = useState("Medio")


  return (
    <Content>
      <h1>Resumo do pedido</h1>

      <h2>TAMANHO:</h2>
      <div className="description">
        <p>-{selectedSize}</p>
        <p>R$ Valor</p>
      </div>

      <h2>SABOR:</h2>
      <div className="description">
        <p>-{selectedFlavor}</p>
        <p>R$ Valor</p>
      </div>

      <h2>PERSONALIZAÇÕES:</h2>
      <div className="description">
        <p>-{selectedAdditional}</p>
        <p>R$ Valor</p>
      </div>

      <div className="resume">
        <p>Valor total: R$ 16.00</p>
        <p>Tempo de preparo:</p>
      </div>

      <div id="btnAction">
        <ButtonAction title="Refazer Pedido" onClick={nextStep} />
      </div>

    </Content>
  )
}