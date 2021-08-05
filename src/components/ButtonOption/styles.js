import styled from "styled-components"

export const Button = styled.button`
  background-color: #FFF;
  font-size: 12px;
  width : 120px;
  padding: 8px;
  border-radius: 4px;
  color : ${({ selected }) => selected ? "#3CE309" : "#a5a5a5"};
  border : 2px solid ${({ selected }) => selected ? "#3CE309" : "#a5a5a5"};
  margin: 10px;

  &:hover{
    cursor: pointer;
    background-color: #3ce30933;
  }
`;