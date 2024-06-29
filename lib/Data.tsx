// Icon Import
import InboxIcon from "@/public/svg/icons/InboxIcon";
import Calendar03Icon from "@/public/svg/icons/Calendar03Icon";
import TimeScheduleIcon from "@/public/svg/icons/TimeScheduleIcon";
import PreferenceHorizontalIcon from "@/public/svg/icons/PreferenceHorizontalIcon";

import ProfileIcon from "@/public/svg/icons/ProfileIcon";
import UserGroupIcon from "@/public/svg/icons/UserGroupIcon";
import ShoppingBasket03Icon from "@/public/svg/icons/ShoppingBasket03Icon";
import StudyLampIcon from "@/public/svg/icons/StudyLampIcon";
import WorkUpdateIcon from "@/public/svg/icons/WorkUpdateIcon";
import VegetarianFoodIcon from "@/public/svg/icons/VegetarianFoodIcon";

export const SideBarList = [
  {
    name: "Inbox",
    link: "/loggedin/inbox",
    icon: <InboxIcon className="w-5 h-5" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar03Icon className="w-5 h-5" />,
  },
  {
    name: "Scheduled",
    link: "/loggedin/inbox",
    icon: <TimeScheduleIcon className="w-5 h-5" />,
  },
  {
    name: "Filter & Label",
    link: "/loggedin/filter-labels",
    icon: <PreferenceHorizontalIcon className="w-5 h-5" />,
  },
];

export const listNames = [
  {
    name: "Default",
    link: "/list/default",
    icon: <InboxIcon className="w-5 h-5" />,
  },
  {
    name: "Personal",
    link: "/list/personal",
    icon: <ProfileIcon className="w-5 h-5" />,
  },
  {
    name: "Family",
    link: "/list/family",
    icon: <UserGroupIcon className="w-5 h-5" />,
  },
  {
    name: "Shopping",
    link: "/list/shopping",
    icon: <ShoppingBasket03Icon className="w-5 h-5" />,
  },
  {
    name: "Groceries",
    link: "/list/groceries",
    icon: <VegetarianFoodIcon className="w-5 h-5" />,
  },
  {
    name: "Academics",
    link: "/list/academics",
    icon: <StudyLampIcon className="w-5 h-5" />,
  },
  {
    name: "Work",
    link: "/list/work",
    icon: <WorkUpdateIcon className="w-5 h-5" />,
  },
];

export const tasks = [
  { id: 1, title: "Buy some coffee" },
  { id: 2, title: "Pay Electricity bill" },
  { id: 3, title: "Call President for approval" },
];
