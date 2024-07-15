"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageTemplate from "@/components/elements/PageTemplate";
import CustomButton from "@/components/elements/CustomButton";
import { baseRedColor } from "@/lib/Colors";
import toast from "react-hot-toast";
import AlertBox from "@/components/elements/AlertBox";

import HandPrayerIcon from "@/public/svg/icons/HandPrayerIcon";
import UploadSquare01Icon from "@/public/svg/icons/UploadSquare01Icon";

const Feedback = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [alertShown, setAlertShown] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlertShown(true);
    setTimeout(() => {
      setAlertShown(false);
      setEmail("");
      setFeedback("");
    }, 15000);
    toast(
      <div className="flex gap-1 rounded-lg">
        <HandPrayerIcon />
        <p>Form Submitted Successfully</p>
      </div>
    );
  };

  return (
    <PageTemplate>
      <div className="flex mt-10 mb-10 items-start justify-center min-h-[70vh]">
        <Card className="max-w-[500px]">
          <CardHeader>
            <CardTitle className="mb-4 sm:mx-10 montserrat">
              Send <span className={`text-red-500`}>Us</span> Your Feedback
            </CardTitle>
            <CardDescription>
              We value your feedback! Share your thoughts with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
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

                <div className="grid gap-2">
                  <Label htmlFor="feedback" className="text-left">
                    Feedback
                  </Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here..."
                    rows={5}
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex justify-between mt-4">
                <CustomButton
                  rightIcon={<UploadSquare01Icon />}
                  className="text-sm w-full"
                  type="submit"
                >
                  Submit
                </CustomButton>
              </CardFooter>
            </form>

            <AlertBox
              alertShown={alertShown}
              title="Feedback Submitted"
              description="Thank you for your feedback! We'll review it soon."
              icon={<HandPrayerIcon />}
            />
            
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Feedback;
