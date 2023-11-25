"use client";

import { useEffect, useState } from "react";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
// Ref. https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
