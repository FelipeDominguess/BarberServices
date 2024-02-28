import React from "react"
import { Header } from "./style"
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #f8f7f7;
  color: #000000;
  padding: 10px 20px;

  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

function HeaderComponent() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <h1>
                            O nome da sua Barbearia!
                        </h1>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default HeaderComponent;
