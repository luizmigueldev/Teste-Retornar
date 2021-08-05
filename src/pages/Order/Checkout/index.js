import React, { useState } from 'react'
import ButtonOption from "../../../components/ButtonOption"
import ButtonAction from "../../../components/ButtonAction"
import { Content } from './styles'

export default function Checkout({ flavor, size, additional, nextStep }) {



  return (
    <Content>
      <h1>Resumo do pedido</h1>

      <h2>TAMANHO:</h2>
      <div className="description">
        <p>- {size.name}</p>
        <p>R$ {size.price.toFixed(2)}</p>
      </div>

      <h2>SABOR:</h2>
      <div className="description">
        <p>- {flavor.name}</p>
        <p>R$ {flavor.price.toFixed(2)}</p>
      </div>

      {
        additional && (
          <>
            <h2>PERSONALIZAÇÕES:</h2>
            <div className="description">
              <p>- {additional.name}</p>
              <p>R$ {additional.price.toFixed(2)}</p>
            </div>
          </>)
      }

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