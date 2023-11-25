import { BearContext } from "@/app/(states)/(Client)/(bear)/context";
import {
  BearProps,
  BearStore,
  bearStoreWithoutInitProps,
  createBearStore,
} from "@/app/(states)/(Client)/(bear)/store";
import { useRef } from "react";

// Provider wrapper
type BearStoreProviderProps = React.PropsWithChildren<BearProps>;

export const BearStoreProvider = ({
  children,
  ...props
}: BearStoreProviderProps) => {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    bearStoreWithoutInitProps.persist.clearStorage();
    storeRef.current = createBearStore(props);
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#wrapping-the-context-provider
