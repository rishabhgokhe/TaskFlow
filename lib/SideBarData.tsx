// Icon Import
import InboxIcon from "../public/svg/icons/InboxIcon";
import Calendar03Icon from "../public/svg/icons/Calendar03Icon";
import TimeScheduleIcon from "../public/svg/icons/TimeScheduleIcon";
import PreferenceHorizontalIcon from "../public/svg/icons/PreferenceHorizontalIcon";

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