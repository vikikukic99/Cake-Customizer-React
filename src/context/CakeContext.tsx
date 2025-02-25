import { createContext, useContext, useState, ReactNode } from "react";

interface Cake {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
}

interface CakeContextProps {
  cake: Cake;
  setCake: (cake: Cake) => void;
}

const CakeContext = createContext<CakeContextProps | undefined>(undefined);

export const CakeProvider = ({ children }: { children: ReactNode }) => {
  const [cake, setCake] = useState<Cake>({
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  });

  return (
    <CakeContext.Provider value={{ cake, setCake }}>
      {children}
    </CakeContext.Provider>
  );
};

export const useCake = () => {
  const context = useContext(CakeContext);
  if (!context) {
    throw new Error("useCake must be used within a CakeProvider");
  }
  return context;
};
