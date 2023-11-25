import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface BearProps {
  bears: number;
}

export interface BearState extends BearProps {
  addBear: () => void;
}

export const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };
  return createStore<BearState>()(
    persist(
      (set) => {
        storeResetFns.add(() => set(DEFAULT_PROPS));

        return {
          ...DEFAULT_PROPS,
          ...initProps,
          addBear: () => set((state) => ({ bears: ++state.bears })),
        };
      },
      { name: "bear-storage" }
    )
  );
};

export type BearStore = ReturnType<typeof createBearStore>;

export const bearStoreWithoutInitProps = createBearStore();
