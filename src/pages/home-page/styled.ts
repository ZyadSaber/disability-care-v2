import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  transform: translate(0, -50%);
  transition: opacity 0.2s ease;
  opacity: 0;
`;

export const SliderContainer = styled.div<{ width?: string }>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => (width ? width : "100%")};

  &:hover {
    ${ButtonsWrapper} {
      opacity: 1;
    }
  }
`;

export const SliderWrapper = styled.div<{
  translateX?: number;
  width?: string;
}>`
  transition: transform 0.5s ease;
  transform: translateX(${({ translateX }) => translateX}px);
`;
