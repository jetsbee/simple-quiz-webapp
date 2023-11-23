"use client";

import { useSearchParams } from "next/navigation";

export const useIdParams = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return id;
};
