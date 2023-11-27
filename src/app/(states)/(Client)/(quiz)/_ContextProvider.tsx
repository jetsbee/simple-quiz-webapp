import { useRef } from "react";
import { QuizContext } from "./context";
import {
  QuizProps,
  QuizStore,
  createQuizStore,
  quizStoreWithoutInitProps,
} from "./store";

// Provider wrapper
type QuizStoreProviderProps = React.PropsWithChildren<QuizProps>;

export const QuizStoreProvider = ({
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
