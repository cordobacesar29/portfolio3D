//@ts-ignore
import { scale, atygg, solutions, touchoftech, approach } from "../assets/images";
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript,
    //@ts-ignore
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Apporach Tech",
        icon: approach,
        iconBg: "#FFDADA",
        date: "Jul 2022 - Jan 2024",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "ATyGG Software",
        icon: atygg,
        iconBg: "#010101",
        date: "Jan 2022 - Jul 2022",
        points: [
            "Build app component whit Ionic Framework.",
            "Design, develop and deploy features, APIs and web applications whit React.js and TypeScript.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Touch of Tech",
        icon: touchoftech,
        iconBg: "#adede6",
        date: "Jul 2021 - Nov 2022",
        points: [
            "Contribute to develop resilient and scalable components/features and get them integrated into the service using React.js and Typescript. ",
            "Implementing responsive design and ensuring cross-browser compatibility",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "4 iSolutions",
        icon: solutions,
        iconBg: "#f2f2f2",
        date: "Oct 2020 - Mar 2022",
        points: [
            "Build, update and integrated features with React frontend components.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Scale AI",
        icon: scale,
        iconBg: "#FFFFFF",
        date: "Aug 2019 - Oct 2019",
        points: [
            "Create web scrapping software with Node.js and Puppeteer framework",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Not Another Recruiter',
        description: 'Not Another Recruiter is designed to eliminate the need of recruitment agencies and revolutionise the recruitment industry as we know it.',
        link: 'https://www.notanotherrecruiter.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'Clinia',
        description: 'Clinia is a consultation management app and laboratory service for healthcare professionals.',
        link: 'https://www.clinia.com.mx/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Approach Tech',
        description: 'Approach is a professional recruitment agency made by IT people specialized in the search for your new IT talent.',
        link: 'https://www.approachtech.co/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SYNAgro',
        description: 'SYNAgro, as an agricultural-livestock software company, offers an efficient tool for agricultural-livestock management that seamlessly integrates Productive and Accounting Modules within the same software.',
        link: 'https://synagroweb.com/',
    },
];