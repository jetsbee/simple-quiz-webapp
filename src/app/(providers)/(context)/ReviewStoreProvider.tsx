import { ReviewContext } from "@/app/(states)/(Client)/(review)/context";
import {
  ReviewProps,
  ReviewStore,
  createReviewStore,
  reviewStoreWithoutInitProps,
} from "@/app/(states)/(Client)/(review)/store";
import { useRef } from "react";

// Provider wrapper
type ReviewStoreProviderProps = React.PropsWithChildren<ReviewProps>;

export const ReviewStoreProvider = ({
  children,
  ...props
}: ReviewStoreProviderProps) => {
  const storeRef = useRef<ReviewStore>();
  if (!storeRef.current) {
    (reviewStoreWithoutInitProps as any).persist?.clearStorage();
    storeRef.current = createReviewStore(props);
  }
  return (
    <ReviewContext.Provider value={storeRef.current}>
      {children}
    </ReviewContext.Provider>
  );
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#wrapping-the-context-provider
