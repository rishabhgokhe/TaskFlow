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
    name: "Terms and Condition",
    link: "/terms-and-condition",
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

export const releaseNotesData = [
  {
    version: "1.0.8",
    date: "12-07-2024",
    notes: [
      "Improved Design, Animation and added new Pages",
      "Added About Us Page, added Buy me Coffee Page, added new Help Center Page, added Release Note Page, added Terms and Condition Page",
      "Reloacted footer link elements and change its visual and added new buy me coffee button",
    ],
  },
  {
    version: "1.0.7",
    date: "11-07-2024",
    notes: [
      "New About Us page added",
      "Improved Not-found Page with new Design and customLinkButton element added to Not-found page and About Us",
      "New banner in top and also improved footer",
    ],
  },
  {
    version: "1.0.6",
    date: "08-07-2024",
    notes: [
      "New ToolTip feature added to required icons, Avatar Dashboard, Notification Popover, Changed second grid with animated svg in bento grid",
      "New hot-toast position, improved Landing Page and Footer design",
      "Added new dialog for edit task button and footer",
    ],
  },
  {
    version: "1.0.5",
    date: "29-06-2024",
    notes: [
      "Updated Dashboard Ui, added new edit button, Default list, Tags Section",
      "Add Task Inline modal alignment fixed for small screen",
      "deleted seperate DatePicker and SelectForm files",
    ],
  },
  {
    version: "1.0.4",
    date: "28-06-2024",
    notes: [
      "Improved dashboard UI, Organized folder structure for dashboard component, New sign-up page",
      "Created add task button with inline edit modal, New logout button",
      "Connected login and dashboard with API",
    ],
  },
  {
    version: "1.0.3",
    date: "27-06-2024",
    notes: [
      "Added types files, loading animated SVG types, improved UI components of dashboard",
      "Improved response handling from login and register API",
      "Added reserved app files (not-found, loading)",
    ],
  },
  {
    version: "1.0.2",
    date: "26-06-2024",
    notes: [
      "Added routes for gettasks, profile, new routes for login, logout, and register, improved models",
      "Improved handleRes with extra object properties, created generateJwtToken, saveCookies, catchAsyncError, resHandler",
      "Removed next-auth package",
    ],
  },
  {
    version: "1.0.1",
    date: "24-06-2024",
    notes: [
      "Converted to Next.js application",
      "Transformed code from JavaScript to TypeScript",
      "Added dashboard page for managing tasks",
    ],
  },
  {
    version: "1.0.0",
    date: "22-05-2024",
    notes: [
      "Initial release of TaskFlow",
      "Added initial add task function",
      "Application is made with EJS and JavaScript",
    ],
  },
];

// ------------------------------------------------------------------------------------------------

export const termsAndConditionData = {
  introduction:
    "Welcome to TaskFlow! These terms and conditions outline the rules and regulations for the use of our website and services.",
  acceptanceOfTerms:
    "By accessing our website, you accept these terms and conditions in full. Do not continue to use TaskFlow if you do not agree to all of the terms and conditions stated on this page.",
  licenseToUse:
    "TaskFlow and/or its licensors own the intellectual property rights for all material on TaskFlow. All intellectual property rights are reserved. You may access this from TaskFlow for your own personal use subject to restrictions set in these terms and conditions.",
  userObligations: {
    heading: "As a user of our website, you agree not to:",
    listItems: [
      "Republish material from TaskFlow",
      "Sell, rent, or sub-license material from TaskFlow",
      "Reproduce, duplicate, or copy material from TaskFlow",
      "Redistribute content from TaskFlow",
    ],
  },
  limitationOfLiability:
    "TaskFlow will not be liable for any damages arising in contract, tort, or otherwise from the use of or inability to use this website, or any material contained in it, or from any action or decision taken as a result of using this website or any such material.",
  changesToTheseTerms:
    "We reserve the right to amend these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis.",
  contactInformation:
    "If you have any questions about these Terms and Conditions, please contact us at: info@taskflow.com.",
  termsAndCondition: `Welcome to TaskFlow!

These terms and conditions outline the rules and regulations for the use of TaskFlow's Website, located at taskflow20.vercel.app/.

By accessing this website, we assume you accept these terms and conditions. Do not continue to use TaskFlow if you do not agree to all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You", and "Your" refers to you, the person log on this website and compliant with the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to, prevailing law of af. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies :

We employ the use of cookies. By accessing TaskFlow, you agreed to use cookies in agreement with TaskFlow's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License :

Unless otherwise stated, TaskFlow and/or its licensors own the intellectual property rights for all material on TaskFlow. All intellectual property rights are reserved. You may access this from TaskFlow for your own personal use subjected to restrictions set in these terms and conditions.

You must not:
- Republish material from TaskFlow
- Sell, rent, or sub-license material from TaskFlow
- Reproduce, duplicate, or copy material from TaskFlow
- Redistribute content from TaskFlow

This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.

User Comments :

Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. TaskFlow does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of TaskFlow, its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, TaskFlow shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

TaskFlow reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.

You warrant and represent that:
- You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
- The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
- The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy
- The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.

You hereby grant TaskFlow a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.

Hyperlinking to our Content :

The following organizations may link to our Website without prior written approval:
- Government agencies;
- Search engines;
- News organizations;
- Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
- System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.

These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.

We may consider and approve other link requests from the following types of organizations:
- commonly-known consumer and/or business information sources;
- dot.com community sites;
- associations or other groups representing charities;
- online directory distributors;
- internet portals;
- accounting, law, and consulting firms; and
- educational institutions and trade associations.

We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of TaskFlow; and (d) the link is in the context of general resource information.

These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to TaskFlow. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.

Approved organizations may hyperlink to our Website as follows:
- By use of our corporate name; or
- By use of the uniform resource locator being linked to; or
- By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.

No use of TaskFlow's logo or other artwork will be allowed for linking absent a trademark license agreement.

iFrames :

Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.

Content Liability :

We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.

Reservation of Rights :

We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.

Removal of links from our website :

If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.

We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.

Disclaimer :

To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
- limit or exclude our or your liability for death or personal injury;
- limit or exclude our or your liability for fraud or fraudulent misrepresentation;
- limit any of our or your liabilities in any way that is not permitted under applicable law; or
- exclude any of our or your liabilities that may not be excluded under applicable law.

The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
`,
};

// ------------------------------------------------------------------------------------------------

export const faqData = [
  {
    question: "What is TaskFlow",
    answer:
      "TaskFlow is a powerful and intuitive web application designed to help users manage and organize their tasks efficiently. It offers a user-friendly interface to add, view, and manage to-do items, enhancing workflow organization and task tracking.",
  },
  {
    question: "How is TaskFlow different from other platforms?",
    answer:
      "TaskFlow provides a uniquely crafted design with a stunning interactive UI, making it easier to use than other task management platforms. We are also working on an iOS app, which will add more convenience.",
  },
  {
    question: "How do I create a new task?",
    answer:
      "To create a new task, click on the 'Add Task' button on the dashboard, enter the task details, and click 'Save'. Your task will be added to the list.",
  },
  {
    question: "Can I edit or delete a task?",
    answer:
      "Yes, you can edit or delete a task by clicking on the respective task in your list. Use the 'Edit' button to modify the task details or the 'Delete' button to remove the task.",
  },
  {
    question: "How do I mark a task as complete?",
    answer:
      "To mark a task as complete, click on the checkbox next to the task. The task will be marked as complete and moved to the completed tasks section.",
  },
  {
    question: "Can I set deadlines for my tasks?",
    answer:
      "Yes, you can set deadlines for your tasks. When creating or editing a task, you can specify the deadline date.",
  },
  {
    question: "How do I view my completed tasks?",
    answer:
      "You can view your completed tasks by navigating to the 'Completed Tasks' section from the dashboard. Here you will find a list of all the tasks you have marked as complete.",
  },
  // {
  //   question: "Is there a way to prioritize tasks?",
  //   answer: "Yes, you can prioritize your tasks by assigning priority levels such as high, medium, or low. This can be done while creating or editing a task."
  // },
  {
    question: "Can I use TaskFlow on my mobile device?",
    answer:
      "Yes, TaskFlow is mobile-friendly and can be accessed from any device with a web browser.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need assistance, you can contact our support team by clicking on the 'Contact Support' link in the Help Center or by emailing support@taskflow.com.",
  },
];

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
