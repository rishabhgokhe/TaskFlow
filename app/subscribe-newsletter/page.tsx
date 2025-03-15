"use client";
import React, { useState } from "react";
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
import AlertBox from "@/components/elements/AlertBox";
import CustomButton from "@/components/elements/CustomButton";
import PageTemplate from "@/components/elements/PageTemplate";
import toast from "react-hot-toast";
import { FadeDown } from "animease";

import InformationCircleIcon from "@/public/svg/icons/InformationCircleIcon";
import MailSend01Icon from "@/public/svg/icons/MailSend01Icon";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [alertShown, setAlertShown] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertShown(true);
    toast.success(
      "Subscription successful! Please check your email for confirmation."
    );
  };

  return (
    <PageTemplate>
      <div className="flex-col">
        <div className="flex items-start mt-10 mb-10 justify-center min-h-[35vh]">
          <Card className="max-w-[500px] p-4">
            <CardHeader>
              <CardTitle className="montserrat mb-4">
                Subscribe to our Newsletter
              </CardTitle>
              <CardDescription>
                Stay updated with the latest news and offers. Enter your email
                below to subscribe.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent>
                <Label className="mb-2 ml-1 block text-left">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </CardContent>
              <CardFooter>
                <CustomButton
                  rightIcon={<MailSend01Icon />}
                  type="submit"
                  className="w-full mt-4"
                >
                  Subscribe
                </CustomButton>
              </CardFooter>
            </form>

            {alertShown && (
              <AlertBox
                alertShown={alertShown}
                title="Subscription Successful"
                description="Please check your email to confirm your subscription."
                icon={<InformationCircleIcon />}
              />
            )}
          </Card>
        </div>
        <div className="justify-center flex flex-col items-center">
          <FadeDown
            variant="h3"
            delay={0.2}
            className="mb-4 font-medium text-xl"
          >
            Join Our Newsletter Family!
          </FadeDown>
          <FadeDown
            variant="p"
            delay={0.3}
            className="mb-4 max-w-[600px] text-center"
          >
            Hey there! Want to stay in the loop with all the cool stuff
            we&apos;re up to? Our newsletter is the place to be! We&apos;ll send
            you fun updates, special offers, and exclusive content that you
            won&apos;t find anywhere else.
            <br />
            <span className="font-semibold">Benefits of Subscribing:</span>
          </FadeDown>
          <FadeDown
            variant="ul"
            delay={0.4}
            className="list-disc list-inside mb-4 text-left"
          >
            <li>Latest news and updates</li>
            <li>Early access to new products</li>
            <li>Fun and engaging content</li>
            <li>Special discounts and deals</li>
            <li>Invites to our awesome events</li>
          </FadeDown>
          <FadeDown variant="p" delay={0.5} className="mb-8 max-w-[600px]">
            Sign up now and become a part of our awesome community! Just pop
            your email in the box above and you&apos;re all set!
          </FadeDown>
        </div>
      </div>
    </PageTemplate>
  );
}
