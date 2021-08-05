import styled from "styled-components"
import ContentOrder from "../../../components/ContentOrder";

export const Content = styled(ContentOrder)`
  h1{
    color: #7b1fa2;
    margin: 10px 0 30px 0;
  }
  h2{
    width: 100%;
    padding-left: 20px;
    margin-top: 10px;
    font-size: 12px;
    color: #7b1fa2;
    align-items: flex-start;
  }

  #btnAction{
    align-self: flex-end;

    span{
      font-size: 12px;
      color: red;
    }
  }
`;