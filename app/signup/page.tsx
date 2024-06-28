"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "@/context/User/UserContext";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Icon Import
import GoogleIcon from "@/public/svg/icons/GoogleIcon";
import AppleIcon from "@/public/svg/icons/AppleIcon";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUserContext();

  async function SignUpHandler(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      });
      const data = response.data;
      console.log(data);


      if (!data.success) {
        console.log(data);
        toast.error(data.message);
      } else {
        console.log(data);
        toast.success(data.message);
        setUser?.(data.user);
      }
    } catch (err) {
      console.error("Error during Sign-up:", err);
      toast.error("Failed Signing Up");
    }
  }

  if (user?._id) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={SignUpHandler} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  id="first-name"
                  placeholder="Rishabh"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  id="last-name"
                  placeholder="Gokhe"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type="password"
              />
            </div>
            <div className="flex justify-end cursor-pointer">
              <Badge variant={"outline"}>Generate Password</Badge>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              <GoogleIcon />
              Sign-up with Google
            </Button>
            <Button className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
              <AppleIcon />
              Sign-up with Apple
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
