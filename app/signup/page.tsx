"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "@/context/User/UserContext";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
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
import { generatePassword } from "@/lib/GeneratePasword";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SecurityPasswordIcon from "@/public/svg/icons/SecurityPasswordIcon";
import PageTemplate from "@/components/elements/PageTemplate";
import { baseRedColor } from "@/lib/Colors";
import AlertBox from "@/components/elements/AlertBox";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUserContext();

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setAlertShown(true);
  };

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
    <PageTemplate>
      <div className="flex flex-col items-center justify-center min-h-[80vh] mb-8">
        <h1 className="flex justify-center items-center mb-2 font-semibold text-3xl">
          Welcome to TaskFlow
        </h1>
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
                <Label htmlFor="email" className="text-start">
                  Email
                </Label>
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
                <Label htmlFor="password" className="text-start">
                  Password
                </Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="form-checkbox cursor-pointer h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <Label
                    htmlFor="showPassword"
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                  >
                    Show Password
                  </Label>
                </div>
                <Badge
                  onClick={handleGeneratePassword}
                  className="cursor-pointer"
                  variant={"outline"}
                >
                  Generate Password
                </Badge>
              </div>

              <AlertBox
                alertShown={alertShown}
                title="Suggestion"
                description="Save your password to a password manager or note it down!"
                icon={
                  <SecurityPasswordIcon
                    className={`text-red-500 h-6 w-6 mr-2`}
                  />
                }
              />

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
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
}
