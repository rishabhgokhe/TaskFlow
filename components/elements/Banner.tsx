import ArrowUpRight01Icon from "@/public/svg/icons/ArrowUpRight01Icon"
import Analytics01Icon from "@/public/svg/icons/Analytics01Icon"
import RenewableEnergyIcon from "@/public/svg/icons/RenewableEnergyIcon"

export default function Banner() {
  return (
    <div className="relative bg-blue-600 px-3.5 py-2.5 sm:px-6 sm:py-3.5 flex flex-wrap gap-3 items-center justify-center">
      <p className="text-sm leading-6 text-white">
        <strong className="font-semibold">Note:</strong> TaskFlow is under development... Stay tunned and visit developing pages.
      </p>
      <div className="flex items-center gap-4 sm:mt-0">
        <LinkButton href="/dashboard" icon={<Analytics01Icon />} name="Dashboard" />
        <LinkButton href="/login" icon={<ArrowUpRight01Icon />} name="Login" />
        <LinkButton href="/signup" icon={<RenewableEnergyIcon />} name="Sign Up" />
      </div>
    </div>
  )
}

function LinkButton({href, icon, name}: {href: string; icon: JSX.Element; name: string}) {
    return (
        <a
          href={href}
          className="flex gap-1 items-center rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-black shadow-sm"
        >
          {icon}{name}
        </a>
    )
}

