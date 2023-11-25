"use client";

import { createContext } from "react";
import { QuizStore } from "./store";

export const QuizContext = createContext<QuizStore | null>(null);
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext
