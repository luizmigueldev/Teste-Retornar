import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ selected }) => selected ? "#126126" : "#fff"};;
  font-size: 12px;
  width : 120px;
  padding: 8px;
  border-radius: 4px;
  color : ${({ selected }) => selected ? "#fff" : "#a5a5a5"};
  border : 2px solid ${({ selected }) => selected ? "#126126" : "#a5a5a5"};
  transition: 1;
  margin: 10px;

  &:hover{
    cursor: pointer;
    background-color: ${({ selected }) => selected ? "#126126" : "#3ce30933"};
  }
`;