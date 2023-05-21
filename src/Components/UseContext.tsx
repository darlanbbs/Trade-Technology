import React, { useState, createContext, ReactNode, useContext } from "react";
type MyContextData = {
  useContext: any;
  setUseContext: React.Dispatch<React.SetStateAction<any>>;
};

type MyContextProps = {
  children: ReactNode;
};

interface FootBallValues {
  key: string;
  country: string;
  league: number;
  season: number;
}

export const MyContext = createContext<MyContextData>({} as MyContextData);

export const MyContextProvider = ({ children }: MyContextProps) => {
  const [useContext, setUseContext] = useState<FootBallValues>({
    key: "",
    country: "Brazil",
    league: 71,
    season: 2023,
  });

  // console.log(useContext);

  return (
    <MyContext.Provider value={{ useContext, setUseContext }}>
      {children}
    </MyContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("UseForm deve ser usado em um formProvider");
  }

  return context;
};
