"use client";

import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > legend {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  & > label {
    font-size: 1.2rem;
    display: flex;
    gap: 0.6rem;
    cursor: pointer;
  }
`;
