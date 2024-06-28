"use client";

import { useState, ReactNode, useEffect } from "react";
import { User } from "../../types";
import { UserContext } from "./UserContext";
import { EmptyUserObject } from "@/lib/objects";
import axios from "axios";

type ContextProviderProps = {
  children: ReactNode;
};

export default function UserContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<User>(EmptyUserObject);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        const data = response.data;
        console.log(data);

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
