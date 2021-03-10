import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: ${rem(5)} 0;
  width: 100%;

  @media (min-width: 620px) {
    width: 30%;
  }
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: ${rem(10)} ${rem(20)};
  padding: ${rem(5)} ${rem(10)};
  border: ${rem(2)} solid ${colors.delta};
  border-radius: ${rem(5)};
  background-color: ${colors.alpha};
`;

export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${rem(10)};

  @media (min-width: 620px) {
    height: 100%;
  }
`;

export const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${rem(150)};
  border: ${rem(1)} solid ${colors.beta};
  border-radius: ${rem(10)};

  @media (min-width: 620px) {
    height: 100%;
  }
`;
