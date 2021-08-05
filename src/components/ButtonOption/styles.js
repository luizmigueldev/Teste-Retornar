import styled from "styled-components"

export const Button = styled.button`
  background-color: #FFF;
  font-size: 12px;
  width : 120px;
  padding: 8px;
  border-radius: 4px;
  color : #a5a5a5;
  border : 2px solid ${({ selected }) => selected ? "#2D9C17" : "#a5a5a5"};
  margin: 10px;
`;