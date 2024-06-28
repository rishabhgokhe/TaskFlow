import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { User } from "../../types";

type UserContextInterface = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<Partial<UserContextInterface>>({});


export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};