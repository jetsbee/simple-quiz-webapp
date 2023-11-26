"use client";

import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  line-height: 2rem;
  width: 60%;

  & > p:first-of-type {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 0.1rem solid black;

    & > div:last-of-type {
      display: flex;
      flex-direction: column;
    }
  }
`;
