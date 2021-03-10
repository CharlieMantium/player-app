import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors, effects } from '../../styles/base';

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

export const Logo = styled.h1`
  color: ${colors.delta};
  text-shadow: ${effects.outline('#000000', '2px')};
  font-size: 3rem;
`;

export const Button = styled.button`
  padding: ${rem(10)} ${rem(50)};
  border: ${rem(3)} solid ${colors.alpha};
  border-radius: ${rem(5)};
  background-color: ${colors.beta};
  cursor: pointer;
`;
