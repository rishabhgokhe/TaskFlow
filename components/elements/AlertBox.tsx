import React from "react";
import FadeDownDiv from "../Animations/FadeDownDiv";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function AlertBox({
  icon,
  title,
  description,
  alertShown,
}: {
  icon?: JSX.Element;
  title: string;
  description?: string;
  alertShown: boolean;
}) {
  return (
    <>
      {alertShown && (
        <FadeDownDiv>
          <Alert className="w-full shadow-md rounded-md">
            {icon}
            <AlertTitle className={`text-red-500`}>
              {title}
            </AlertTitle>
            <AlertDescription className="mt-2">{description}</AlertDescription>
          </Alert>
        </FadeDownDiv>
      )}
    </>
  );
}
