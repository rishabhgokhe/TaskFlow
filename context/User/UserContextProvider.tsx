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
      console.log("Hiii i am rishabh");
      
      try {
        const response = await axios.get("/api/profile");
        const data = response.data;
        console.log(data.name);

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


// "use client";
// import { useEffect } from "react";
// import axios from "axios";
// import { userActions } from "@/redux/user/userSlice";
// import { useAppDispatch } from "@/redux/hooks";

// interface ClientProviderProps {
//   children: React.ReactNode;
// }

// export default function ClientProvider({ children }: ClientProviderProps) {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       console.log("Hiii I am Rishabh");

//       try {
//         const response = await axios.get("/api/profile", {
//           withCredentials: true
//         });
//         const data = response.data;
//         console.log("Response data:", data);

//         if (data.success) {
//           dispatch(userActions.setUser(data.user.name));
//         }
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, [dispatch]);

//   return <div>{children}</div>;
// }