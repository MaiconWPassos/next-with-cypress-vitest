import { ReactNode, createContext, useState } from "react";

export type HomeContextData = {
  lightOn: boolean;
  setLightOn: (state: boolean) => void;
};

export const HomeContext = createContext({} as HomeContextData);

type HomeProviderProps = {
  children: ReactNode;
};

export function HomeProvider({ children }: HomeProviderProps) {
  const [lightOn, setLightOn] = useState(false);

  return (
    <HomeContext.Provider value={{ lightOn, setLightOn }}>
      {children}
    </HomeContext.Provider>
  );
}
