"use client";

import { useState, ReactNode } from "react";
import { User } from "../../types";
import { UserContext } from "./UserContext";

type ContextProviderProps = {
  children: ReactNode;
};

export default function UserContextProvider({
  children,
}: ContextProviderProps) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
