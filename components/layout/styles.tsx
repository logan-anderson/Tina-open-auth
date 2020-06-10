import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;

export const StyledFooter = styled.footer`
  flex-shrink: 0;
`;
