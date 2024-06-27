import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../../types";

type UserContextInterface = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<Partial<UserContextInterface>>({});
