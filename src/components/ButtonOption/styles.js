import styled from "styled-components"

export const Button = styled.button`
  background-color: #FFF;
  font-size: 12px;
  width : 120px;
  padding: 8px;
  border-radius: 4px;
  border-color: ${({ selected }) => selected && "#55FF5D"};
  color : #a5a5a5;
  border : 2px solid #a5a5a5;
  margin: 10px;
`;