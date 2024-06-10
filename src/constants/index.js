import { meta, shopify, starbucks, tesla, bestbrains, occ, isigma } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    c,
    sql,
    selenium,
    numpy,
    figma,
    pandas,
    shirt,
    paw,
    house,
    game,
    portfolio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: c, 
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
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
        imageUrl: selenium,  
        name: "Selenium",
        type: "Frontend Testing",
    },
    {
        imageUrl: numpy, 
        name: "NumPy",
        type: "Backend",
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
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "UI/UX",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Backend",
    }

];

export const experiences = [
    {
        title: "Programming and Robotics Tutor",
        company_name: "BestBrains Learning Center",
        icon: bestbrains,
        iconBg: "#FFFFFF",
        date: "May 2022 - Sept 2022",
        points: [
            "Instructed more than 100 students, ranging in age from 4 to 12, in the fundamentals of robotics using EV3 and Lego Wedo systems.",
            "Organized and facilitated robotics workshops and demonstrations, effectively communicating complex concepts in a simplified manner for young learners.",
            "Developed a comprehensive robotics curriculum, that was designed for kids between the ages of 4-12 which covered basic concepts of mechanics, electronics, and simple coding principles.",
            
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Isigmasolutions",
        icon: isigma,
        iconBg: "#FFFFFF",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Coordinated with the technical lead to fortify business relationships and implement internet marketing strategies, supporting 10+ clients with frequent updates and rigorously ensuring deadlines align with set milestones.",
            "Worked closely with the team to collect client requirements for creating websites in diverse sectors like real-estate, travel, and finance, utilizing HTML/CSS/JavaScript on WordPress.",
            "Implemented effective SEO/SMO strategies boosted monthly traffic by 200 users, achieving 1st-page Google rankings and winning WMA Awards 2023 after a 6-month campaign",
        ],
    },
    {
        title: "Small Business Digital Advisor",
        company_name: "Ontario Chamber of Commerce",
        icon: occ,
        iconBg: "#FFFFFF",
        date: "  Incoming ",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        link: 'https://github.com/seedhantkalra',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Automated Financial Portfolio Generator',
        description: 'Engineered a Python based tool for optimized financial portfolio management, processing stock tickers with advanced data filtering and comprehensive financial analysis to ensure maximum investment safety.',
        link: 'https://github.com/seedhantkalra/CFM-101-Group-Assignment',
    },
    {
        iconUrl: shirt,
        theme: 'btn-back-green',
        name: 'AI Powered 3-D T-Shirt Picker',
        description: 'Created a website, allowing users to print any design on a 3-D shirt model with the help of AI.',
        link: 'https://seedhantkalra.ca/3d/',
    },
    {
        iconUrl: paw,
        theme: 'btn-back-blue',
        name: 'PiPaws ',
        description: 'Built a remote pet feeding allowing users to dispense food through a web application.',
        link: 'https://github.com/seedhantkalra/pet-feeder',
    },
    {
        iconUrl: house,
        theme: 'btn-back-pink',
        name: 'Estate Eagle ',
        description: 'Developed a real estate application that leverages machine learning and AI to accurately predict the pricing of diverse real estate properties.',
        link: 'https://github.com/seedhantkalra/Estate-Eagle',
    },
    {
        iconUrl: game,
        theme: 'btn-back-black',
        name: 'Unbeatable Tic-Tac-Toe AI ',
        description: 'Designed an unbeatable Tic-Tac-Toe AI that strategically ensures it never loses.',
        link: 'https://github.com/seedhantkalra/Unbeatable-Tic-Tac-Toe-AI',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-yellow',
        name: '3-D Personal Portfolio',
        description: 'This website! My personal portfolio showcasing my work, experiences, and skills.',
        link: 'https://seedhantkalra.ca/',
    },
    // {
    //     iconUrl: portfolio,
    //     theme: 'btn-back-orange',
    //     name: 'Crypto App Mockup',
    //     description: 'Created a crypto app mockup called Watcoin.',
    //     link: 'https://seedhantkalra.ca/',
    // }

];