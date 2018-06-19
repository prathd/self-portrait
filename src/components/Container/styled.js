import styled from 'styled-components';

export const ResponsiveDiv = styled.div`
  width: 100%;
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 560px;
  }

  @media (min-width: 768px) {
    max-width: 750px;
  }

  @media (min-width: 992px) {
    max-width: 980px;
  }

  @media (min-width: 1200px) {
    max-width: 1180px;
  }

  @media (min-width: 1420px) {
    max-width: 1260px;
  }
`;
