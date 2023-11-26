"use client";

import styled from "@emotion/styled";

export const StyledButton = styled.button`
  width: 60%;
  height: 3rem;
  border: 0;
  border-radius: 0.8rem;
  background-color: #9fd5b9;
  cursor: pointer;

  &:active {
    transform-origin: center;
    transform: scale(1.01);
  }
`;
