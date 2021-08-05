import styled from "styled-components"

export const Content = styled.div`
  padding: 10px;
  min-width: 400px;
  min-height: 200px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px){
    min-width: 200px;
    height: auto;
  }
`;