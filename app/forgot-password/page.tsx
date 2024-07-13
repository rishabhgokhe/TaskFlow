"use client";
import React, { useState } from "react";
import AlertBox from "@/components/elements/AlertBox";
import CustomButton from "@/components/elements/CustomButton";
import PageTemplate from "@/components/elements/PageTemplate";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import InformationCircleIcon from "@/public/svg/icons/InformationCircleIcon";
import MailUpload01Icon from "@/public/svg/icons/MailUpload01Icon";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [alertShown, setAlertShown] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertShown(true);
    toast.success("Reset link sent successfully")
  };

  return (
    <PageTemplate>
      <div className="flex items-start mt-10 mb-10 justify-center min-h-[60vh]">
        <Card className="max-w-[400px] p-4">
          <CardHeader>
            <CardTitle>Forgot Password?</CardTitle>
            <CardDescription>
              Reset password from mail sent to your registered email
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent>
              <Label className="mb-2 ml-1 block text-left">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your registered Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </CardContent>
            <CardFooter>
              <CustomButton
                rightIcon={<MailUpload01Icon />}
                type="submit"
                className="w-full mt-4"
              >
                Send Reset Link
              </CustomButton>
            </CardFooter>
          </form>

          {alertShown && (
            <AlertBox
              alertShown={alertShown}
              title="Reset Link sent Successfully"
              description="Open Email and click on the link to reset password"
              icon={<InformationCircleIcon />}
            />
          )}
        </Card>
      </div>
    </PageTemplate>
  );
}
