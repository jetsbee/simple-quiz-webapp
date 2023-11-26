"use client";

import styled from "@emotion/styled";

export const StyledListWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 60%;

  & > p:first-of-type {
    font-size: 2rem;
    margin-bottom: 1.4rem;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.4rem;
    text-decoration: underline;
  }
`;
