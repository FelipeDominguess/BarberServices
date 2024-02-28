import React from "react"
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #fdfdfd;
  color: #080808;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const AddressInfo = styled.div`
  flex: 1;

  p {
    margin-top: 0;
  }
`;

function FooterComponent() {
    return (
        <FooterContainer>
            <FooterContent>
                <ContactInfo>
                    <h3>Contato</h3>
                    <ul>
                        <li>Email: email@gmail.com</li>
                    </ul>
                </ContactInfo>
                <AddressInfo>
                    <h3>Endereço</h3>
                    <p>
                        MR. Borges de Medeiros, 897E - Pres. Médici, Chapecó - SC, 89801 -
                        161 Edifício Vértice Office | SALA 1601
                    </p>
                </AddressInfo>
            </FooterContent>
        </FooterContainer>
    );
}

export default FooterComponent;
