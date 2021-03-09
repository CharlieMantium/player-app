import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

export const Wrapper = styled.div`
  @media (min-width: 620px) {
    padding: 0 ${rem(100)};
  }
`;

export const Header = styled.h1``;

export const ListChangeWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  margin: ${rem(10)} 0;

  @media (min-width: 620px) {
    width: 35%;
  }
`;

export const Button = styled.button`
  margin: 0 ${rem(5)};
  padding: ${rem(10)};
  flex: 1;
  border: ${rem(3)} solid ${colors.alpha};
  border-radius: ${rem(5)};
  background-color: ${colors.beta};
  cursor: pointer;
`;
