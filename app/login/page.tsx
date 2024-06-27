"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FormEvent, useContext, useState } from "react";
import toast from 'react-hot-toast';


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Icon import
import AppleIcon from "../../public/svg/icons/AppleIcon";
import GoogleIcon from "../../public/svg/icons/GoogleIcon";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const responce = await axios.post("/api/auth/login", { email, password });
      const data = await responce.data;
      const userData = await responce.data[0];

      console.log(userData);
      console.log(data);
      console.log(data.message);
      console.log(data.success);

      if (!data.success) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Welcome to TaskFlow
            </p>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
                placeholder="myemail@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              <GoogleIcon />
              Login with Google
            </Button>
            <Button className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
              <AppleIcon />
              Login with Apple
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hidden bg-muted lg:block">
        <Image
          src="./svg/icons/Mobile Login Illustration.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div> */}
    </div>
  );
}
