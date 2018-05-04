import styled from 'styled-components';

export const ResponsiveDiv = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1420px) {
    max-width: 1400px;
  }
`;
