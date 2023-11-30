import { meta, shopify, tesla, technocolabs, minister, smartfactory } from "../assets/images";
import {
    tensorflow,
    springboot,
    car,
    java,
    android,
    opencv,
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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: tensorflow,
        name: "tensorflow",
        type: "machine learning",
    },
    {
        imageUrl: opencv,
        name: "opencv",
        type: "computer vision",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "springboot",
        type: "backend",
    },
    {
        imageUrl: java,
        name: "java",
        type: "fullstack",
    },
    {
        imageUrl: android,
        name: "android",
        type: "Mobile",
    },
    {
        imageUrl: express,
        name: "Express",
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
        title: "Machine Learning Engineer",
        company_name: "TECHNOCOLABS SOFTWARES",
        icon: technocolabs,
        iconBg:"#4B0082",
        date: "October 2022 - December 2022",
        points: [
            " worked on a real project about credit risk prediction of a peer to peer landing platform called Bondora.",
            "Developing multiple machine learning models to predict the credit risk of the borrowers.Mainly Regression and Classification models.",
            "Developing a web application to visualize the results of the machine learning models.",
            "Deploying the machine learning models to production using Flask and Heroku.",
        ],
    },
    {
        title: "Data Scientist",
        company_name: "Minister of Economy and Finance",
        icon: minister,
        iconBg: "#accbe1",
        date: "June 2023 - September 2023",
        points: [
            " work on developing a chatbot designed to answer questions related to the Department of Economic Studies and Financial Forecast (DEPF).",
            "Using Natural Language Processing (NLP) techniques to develop the chatbot.",
            "Using the OPL stack: Langchain, OpenAI, and Pinecone(for Knowledge Base).",
            "Deploying the chatbot to production using Streamlit",
        ],
    },
    {
        title: "Deep Learning Engineer",
        company_name: "3D Smart Factory",
        icon: smartfactory,
        iconBg: "#b7e4c7",
        date: "July 2023 - October 2023",
        points: [
            "developing  a Convolutional Neural Network (CNN) for tumor classification using a dataset of medical images.",
            "Using Transfer Learning to improve the performance of the model.",
            " implementing a neural network on a virtual FPGA (Field-Programmable Gate Array) to predict the red color of malignant tumors.",
            "Technologies used: CNN, FPGA, Tensorflow,OpenCV.",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Air Quality Monitoring system',
        description: '  developing a prototype of air quality monitoring that uses arduino technology with sensors and Rasberry pi4 to detect the quality of air , this IOT object is controlled with an ANDROID app called AQM.',
        link: 'https://github.com/Mohammedelka/Air-quality-monitoring',
    },
    /*{
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },*/
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car management App',
        description: 'CarsMS is a comprehensive car management system developed using React JS, Spring Boot, MySQL, and Docker.',
        link: 'https://github.com/Mohammedelka/Springboot-app-of-cars-with-react-docker-mysql',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'Self Driving Car',
        description: ' I worked on a developement of self driven car simulation that includes the use of neural networks in javascript without any library.',
        link: 'https://mohammedelka.github.io/self-driven-car-neural-networks-no-libraries/',
    },
    /*
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },*/
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Ta3alam(CMS)',
        description: ' Ta3alam Platform is a Java EE (JEE) project that I developed to create an efficient and user-friendly course management system. This platform streamlines the process of course registration, assignment submission, and communication between instructors and students.',
        link: 'https://github.com/Mohammedelka/Ta3alam',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'E-Library',
        description: ' I created an E-library project offering a digital repository for books, journals, and educational resources. Users can easily search, access, and download materials, making it a convenient and accessible platform for knowledge seekers and researchers.',
        link: 'https://github.com/Mohammedelka/E-library-',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Financial Chatbot',
        description: 'Developing a chatbot designed to answer questions related to the Department of Economic Studies and Financial Forecast (DEPF).',
        link: 'https://depfbot.streamlit.app/',
    }

];