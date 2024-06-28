"use client"
import React from 'react'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useUserContext } from '@/context/User/UserContext'
import { EmptyUserObject } from '@/lib/objects'
import { redirect } from 'next/navigation'

export default function LogoutButton() {

  const {user, setUser} = useUserContext();

    async function LogoutHandler() {
        toast.success("Logged Out Successfully")
        try {
          const responce = await axios.get("/api/auth/logout");
          const data = await responce.data;

          if (!data.success) return toast.error(data.message);
          setUser?.(EmptyUserObject);
          toast.success(data.message);
        } catch (error) {
          toast.error("Error Occured in Logout");
        }
    }

    if (!user?._id) return redirect("/");
    
  return (
    <Button size={"lg"} onClick={LogoutHandler} >Logout</Button>
  )
}
