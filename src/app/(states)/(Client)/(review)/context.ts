"use client";

import { createContext } from "react";
import { ReviewStore } from "./store";

export const ReviewContext = createContext<ReviewStore | null>(null);
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext
