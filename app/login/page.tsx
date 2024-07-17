"use client";
import Link from "next/link";
import axios from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Icon import
import AppleIcon from "../../public/svg/icons/AppleIcon";
import GoogleIcon from "../../public/svg/icons/GoogleIcon";
import { useUserContext } from "@/context/User/UserContext";
import { redirect } from "next/navigation";
import PageTemplate from "@/components/elements/PageTemplate";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useUserContext();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const data = response.data;
      const userData = data.user;

      console.log(data);
      console.log(userData);

      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      if (userData !== undefined) setUser?.(userData);
    } catch (err) {
      console.error("Error during login:", err);
      toast.error("Invalid Email or Password");
    }
  };

  if (user?._id) return redirect("/dashboard");

  // const dispatch = useAppDispatch()

  // const handleLogin = (e: FormEvent) => {
  //   dispatch(login({ email, password }));
  // };

  return (
    <PageTemplate>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-left">
                    Email
                  </Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="myemail@example.com"
                    required
                  />
                </div>

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
                  type={showPassword ? "text" : "password"}
                  required
                />

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
                    className="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
                    Show Password
                  </Label>
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  <GoogleIcon />
                  Sign-up with Google
                </Button>
                <Button className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
                  <AppleIcon />
                  Sign-up with Apple
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
}
