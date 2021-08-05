import styled from "styled-components"

export const Button = styled.button`
  background-color: #FFF;
  width : 100px;
  padding: 5px;
  border-radius: 4px;
  border-color: ${({ selected }) => selected && "#55FF5D"}

`;