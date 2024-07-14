import { baseBlueColor } from "@/lib/Colors";
import { footerLinksData } from "@/lib/Data";

import ArrowUpRight01Icon from "@/public/svg/icons/ArrowUpRight01Icon";
import Analytics01Icon from "@/public/svg/icons/Analytics01Icon";
import RenewableEnergyIcon from "@/public/svg/icons/RenewableEnergyIcon";

export default function Banner() {
  return (
    <div
      className={`relative bg-blue-600 px-3.5 py-2.5 sm:px-6 sm:py-3.5 flex flex-wrap gap-3 items-center justify-center`}
    >
      <p className="text-sm leading-6 text-white">
        <strong className="font-semibold">Note:</strong> Visit newly developed
        pages
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:mt-0">
        <LinkButton
          href={bannerHistory[bannerHistory.length - 1].data[0].link}
          name={bannerHistory[bannerHistory.length - 1].data[0].name}
          icon={bannerHistory[bannerHistory.length - 1].data[0].icon}
        />
        {footerLinksData.map((item, index) => (
          <LinkButton
            key={index}
            href={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

function LinkButton({
  href,
  icon,
  name,
}: {
  href: string;
  icon?: JSX.Element;
  name: string;
}) {
  return (
    <a
      href={href}
      className="flex gap-1 items-center rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-black shadow-sm"
    >
      {icon}
      {name}
    </a>
  );
}

const bannerHistory = [
  {
    id: 2,
    note: "Visit newly developed pages",
    data: footerLinksData,
  },
  {
    id: 1,
    note: "TaskFlow is under development... Stay tunned and visit developing pages.",
    data: [
      {
        name: "Dashboard",
        link: "/dashboard",
        icon: <Analytics01Icon />,
      },
      {
        name: "Login",
        link: "/login",
        icon: <ArrowUpRight01Icon />,
      },
      {
        name: "Sign Up",
        link: "/signup",
        icon: <RenewableEnergyIcon />,
      },
    ],
  },
];
