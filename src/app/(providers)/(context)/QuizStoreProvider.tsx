import { QuizContext } from "@/app/(states)/(Client)/(quiz)/context";
import {
  QuizProps,
  QuizStore,
  createQuizStore,
  quizStoreWithoutInitProps,
} from "@/app/(states)/(Client)/(quiz)/store";
import { useRef } from "react";

// Provider wrapper
type QuizStoreProviderProps = React.PropsWithChildren<QuizProps>;

export const BearStoreProvider = ({
  children,
  ...props
}: QuizStoreProviderProps) => {
  const storeRef = useRef<QuizStore>();
  if (!storeRef.current) {
    (quizStoreWithoutInitProps as any).persist?.clearStorage();
    storeRef.current = createQuizStore(props);
  }
  return (
    <QuizContext.Provider value={storeRef.current}>
      {children}
    </QuizContext.Provider>
  );
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#wrapping-the-context-provider
