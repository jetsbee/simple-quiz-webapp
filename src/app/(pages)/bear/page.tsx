"use client";

import { useIsClient } from "@/app/(hooks)/useIsClient";
import { resetAllStores } from "@/app/(states)/(Client)/(_zustand)/zustandWithResetFns";
import { useBearStore } from "@/app/(states)/(Client)/(bear)/hooks";

const Page = () => {
  const isClient = useIsClient();

  const bearStore = useBearStore();
  const { bears, addBear } = bearStore;

  return (
    <>
      <div onClick={() => addBear()}>{isClient && bears}</div>
      <button onClick={() => resetAllStores()}>RESET</button>
    </>
  );
};

export default Page;
