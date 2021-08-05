import styled from "styled-components"

export const Button = styled.button`
  background-color: #FFF;
  font-weight: bold;
  font-size: 12px;
  width : 90px;
  padding: 5px;
  border-radius: 4px;
  border-color: ${({ selected }) => selected && "#55FF5D"};
  color : #7b1fa2;
  border : 2px solid #7b1fa2;
  margin: 10px;

`;