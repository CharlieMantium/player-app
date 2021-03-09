import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 0 ${rem(20)} 0;

  @media (min-width: 620px) {
    justify-content: center;
  }
`;

export const Logo = styled.h1``;

export const Button = styled.button`
  padding: ${rem(10)} ${rem(50)};
  border: ${rem(3)} solid ${colors.alpha};
  border-radius: ${rem(5)};
  background-color: ${colors.beta};
`;
