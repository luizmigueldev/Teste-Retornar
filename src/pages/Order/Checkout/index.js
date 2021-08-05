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
        <p>- {size}</p>
        <p>R$ Valor</p>
      </div>

      <h2>SABOR:</h2>
      <div className="description">
        <p>- {flavor}</p>
        <p>R$ Valor</p>
      </div>

      {
        additional && (
          <>
            <h2>PERSONALIZAÇÕES:</h2>
            <div className="description">
              <p>- {additional}</p>
              <p>R$ Valor</p>
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