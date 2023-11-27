import React from "react";
import { Providers } from "../src/app/(providers)";
import { resetAllStores } from "../src/app/(states)/(Client)/(_zustand)/zustandWithResetFns";
import { inter } from "../src/app/fonts";

const StoreResetDecorator = (Story: React.ComponentType) => {
  resetAllStores();
  return <Story />;
};

const GlobalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`global-storybook-wrapper ${inter.className}`}>
      <Providers>{children}</Providers>
    </div>
  );
};

const WrapDecorator = (Story: React.ComponentType) => {
  return (
    <GlobalWrapper>
      <Story />
    </GlobalWrapper>
  );
};

const GlobalDecorators = [WrapDecorator, StoreResetDecorator];

export default GlobalDecorators;
