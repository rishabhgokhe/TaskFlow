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

import GithubIcon from "@/public/svg/icons/GithubIcon";
import InstagramIcon from "@/public/svg/icons/InstagramIcon";
import RedditIcon from "@/public/svg/icons/RedditIcon";
import Linkedin01Icon from "@/public/svg/icons/Linkedin01Icon";
import NewTwitterRectangleIcon from "@/public/svg/icons/NewTwitterRectangleIcon";
import MailAdd02Icon from "@/public/svg/icons/MailAdd02Icon";

import InformationCircleIcon from "@/public/svg/icons/InformationCircleIcon";
import StickyNote02Icon from "@/public/svg/icons/StickyNote02Icon";
import Coffee02Icon from "@/public/svg/icons/Coffee02Icon";
import SecurityLockIcon from "@/public/svg/icons/SecurityLockIcon";
import HelpCircleIcon from "@/public/svg/icons/HelpCircleIcon";

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

// ------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------

export const tasks = [
  {
    id: 1,
    title: "Buy some coffee",
    description: "Buy a pack of Colombian coffee from the grocery store.",
    list: "Groceries",
    date: "Mon Jul 29 2024 16:13:56 GMT+0530 (India Standard Time)",
  },
  {
    id: 2,
    title: "Pay Electricity bill",
    description: "Pay the monthly electricity bill online before the due date.",
    list: "Family",
    date: "Tue Jul 30 2024 16:13:56 GMT+0530 (India Standard Time)",
  },
  {
    id: 3,
    title: "Call President for approval",
    description:
      "Discuss the new project plan with the president and get the necessary approvals.",
    list: "Work",
    date: "Thu Jul 25 2024 16:13:56 GMT+0530 (India Standard Time)",
  },
];

// ------------------------------------------------------------------------------------------------

export const iconLinkData = [
  {
    name: "Github",
    link: "https://github.com/rishabhgokhe",
    icon: <GithubIcon />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/rishabh_gokhe?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
    icon: <InstagramIcon />,
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/u/DiscoversOther9152/s/kS20bBPbSF",
    icon: <RedditIcon />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rishabh-gokhe-22168b287",
    icon: <Linkedin01Icon />,
  },
  {
    name: "X / Twitter",
    link: "https://twitter.com/rishabhgokhe?s=21&t=Flej6ro1R2UhXzVpOMJTdg",
    icon: <NewTwitterRectangleIcon />,
  },
  {
    name: "Mail Us",
    link: `mailto:rishabhgokhe@gmail.com`,
    icon: <MailAdd02Icon />,
  },
];

// ------------------------------------------------------------------------------------------------

export const footerLinksData = [
  {
    name: "About Us",
    link: "/about",
    icon: <InformationCircleIcon />,
  },
  {
    name: "Release Note",
    link: "/release-note",
    icon: <StickyNote02Icon />,
  },
  {
    name: "Buy a Coffee",
    link: "/buy-a-coffee",
    icon: <Coffee02Icon />,
  },
  {
    name: "Privacy",
    link: "/privacy",
    icon: <SecurityLockIcon />,
  },
  {
    name: "Help",
    link: "/help",
    icon: <HelpCircleIcon />,
  },
];

// ------------------------------------------------------------------------------------------------
export const aboutData = {
  welcomeText:
    "Welcome to TaskFlow, your ultimate solution for managing tasks efficiently and effectively. Our platform is designed to help you stay organized, prioritize your work, and achieve your goals seamlessly. Whether you are a professional looking to manage your projects or a student organizing your study schedule, TaskFlow has got you covered.",
  founderText:
    "Founded by Rishabh Gokhe, a passionate Full-Stack Developer and Computer Science and Engineering student, TaskFlow aims to revolutionize task management and productivity tools. With a deep commitment to technology and innovation, Rishabh's vision is to create a platform that empowers individuals to excel in the digital era.",
  missionText:
    "At TaskFlow, we believe in simplifying task management and enhancing productivity through intuitive tools and thoughtful design. Our mission is to empower individuals and teams to achieve more by providing a seamless and enjoyable task management experience.",
  whatWeOffer: [
    {
      listTitle: "Comprehensive Task Management",
      listDescription:
        "From personal to team tasks, TaskFlow offers a robust suite of features to streamline your workflow.",
    },
    {
      listTitle: "Flexible and Intuitive Interface",
      listDescription:
        "Customize TaskFlow to suit your unique needs and preferences, ensuring a smooth and efficient user experience.",
    },
    {
      listTitle: "Collaborative Tools",
      listDescription:
        "Foster collaboration and communication with built-in tools that facilitate teamwork and project coordination.",
    },
    {
      listTitle: "Continuous Innovation",
      listDescription:
        "We are committed to continuous improvement and innovation, incorporating user feedback to evolve and enhance TaskFlow continually.",
    },
  ],
  values: [
    {
      listTitle: "Empowerment",
      listDescription:
        "Empowering individuals and teams to achieve their goals and maximize their potential.",
    },
    {
      listTitle: "Innovation",
      listDescription:
        "Embracing innovation to create cutting-edge solutions that redefine task management.",
    },
    {
      listTitle: "Accessibility",
      listDescription:
        "Ensuring accessibility and inclusivity in our platform to support diverse users worldwide.",
    },
    {
      listTitle: "Quality",
      listDescription:
        "Committing to excellence by delivering high-quality, reliable, and user-friendly tools.",
    },
  ],
};

// ------------------------------------------------------------------------------------------------

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
