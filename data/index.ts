export const navItems = [
  { name: "Home", link: "" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
   { name: "Contact", link: "#contact" },
];
export const gridItems = [
  {
    id: 1,
    title: "Full Stack Developer Intern, enhancing secure authentication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Remote experience in responsive UI, boosting engagement",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "React, NodeJS, Prisma, MongoDB, JWT",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for secure development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Lost and Found platform",
    description: "  ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const projects = [
  {
    id: 1,
    title: "Lost and Found Platform",
    des: "A platform for reporting and claiming lost items, integrated with Google OAuth and real-time notifications using Nodemailer.",
    img: "/lnf.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/jwt.svg", "/nodemailer.svg"],
    link: "https://lnf-bay.vercel.app/",
  },
  {
    id: 2,
    title: "Thinkerly - Scalable Blog Platform",
    des: "A blog platform built with React and Cloudflare Workers, featuring JWT authentication and Zod for type-safe validation.",
    img: "/Thinkerly.png",
    iconLists: ["/re.svg", "/cloudflare.svg", "/ts.svg", "/prisma.svg", "/jwt.svg"],
    link: "https://thinkerly.vercel.app/",
  },
  {
    id: 3,
    title: "Employee Management System",
    des: "A comprehensive system to manage employee data, track attendance, and streamline administrative tasks.",
    img: "/abc.png",
    iconLists: ["/mongo.svg", "/express.svg", "/node.svg", "/re.svg", "/auth.svg"],
    link: "https://github.com/hyperaid/EMPLOYEE-MANAGEMENT",
  },
  {
    id: 4,
    title: "Study Notion - EdTech Platform",
    des: "An interactive EdTech platform supporting video courses, quizzes, and student engagement features.",
    img: "/StudyNotion.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongo.svg", "/node.svg", "/express.svg"],
    link: "https://github.com/hyperaid/EDTECH_host",
  },
];

 

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern - Oddmind Innovation",
    desc: "Enhanced user authentication with secure encryption, embedded YouTube in forms, and set up automated registration emails with Nodemailer.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - WeSee",
    desc: "Improved UI components using React, increasing user navigation and engagement by 20% through seamless integration of design elements.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/hyperaid"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/Abhinav55008362"

  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/abhinav-sharma-8809a5142/"

  },
];
