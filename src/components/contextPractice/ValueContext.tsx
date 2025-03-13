import { createContext, useState, ReactNode, FC } from "react";
type ValueProps = {
  value: boolean;
  changeTheme: () => void;
};
const ValueContext = createContext<ValueProps | undefined>(undefined);

type ValueProviderProps = {
  children: ReactNode;
};

export const ValueProvider: FC<ValueProviderProps> = ({ children }) => {
  const [value, setValue] = useState<boolean>(false);
  const changeTheme = () => setValue((prevMode) => !prevMode);
  return (
    <ValueContext.Provider value={{ value, changeTheme }}>
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContext;
