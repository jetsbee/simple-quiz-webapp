"use client";

import { createContext } from "react";
import { BearStore } from "./store";

export const BearContext = createContext<BearStore | null>(null);
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext
