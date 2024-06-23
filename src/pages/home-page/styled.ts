import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  &:hover > div {
    opacity: 1;
  }
`;

export const StyledMessageText = styled.h3`
  font-size: 27px;
  &::after {
    content: "";
    clear: both;
    display: block;
    float: left;
    position: relative;
    height: 2px;
    width: 70%;
    margin: 10px 30% 0 0;
    border-radius: 2px;
    padding: 0;
  }
`;
