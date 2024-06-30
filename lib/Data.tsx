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


export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
