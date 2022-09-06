import {FaHtml5,FaCss3Alt,FaReact,FaBootstrap} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {SiRedux,SiNextDotJs,SiMocha,SiNpm} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io';
import {BiTransferAlt} from 'react-icons/bi'


const AboutYou = {
    name:"Saddam Hussain",
    jobtitle:"Frontend Developer",
    bigintro:"Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and for software development, I attended a 1000+ hour coding bootcamp to learn new languages while sharpening existing skills. Ready to apply my passion for coding to a talented engineering team to develop quality solutions. ",
    shortintro:"Hi, my name is Saddam Hussain and i am a Frontend Developer.My interest are Coding,Travelling,Exploring new tech",
    phone:"7678215578",
    email:"sdhussain498@gmail.com",
    address:"Delhi 110040",
    
};

const ResumeSkill = ["Javascript","HTML5", "CSS3", "NodeJs", "ReactJs","Bootstrap","GraphQL", "NPM","Yarn","Nodemon","Redux","Axios","Express","Mocha-Chai"];
const ResumeExperience = [
    {
        CompanyName:"V AIMS SOLUTIONS PVT LTD",
        Position:"Junior Front-End Developer",
        Year:"2020",
        Challange:["Delivered 30+ projects of all sizes", "Creating solutions for consumer services","Wrote 40+ automated tests for every new feature to identify and rectify bugs","Evaluated 100+ end-to-end designs for performance complexity, scalability, quality, and security","Assessed technical debts, and devised plan to reduce by 25% each quarter","Collaborated with 8 design team members to incorporate visual designs into functional web pages","Built 4 landing pages to support email marketing campaigns and promotions"],
    },
    
    {
        CompanyName:"",
        Position:"Education",
        Year:"2019",
        Challange:["Course on UDEMY by Anthony Alicea(27 years experience) on Javascript ", "HTML and CSS course by MOSH Hamaedani","1000 plus hours of Practice and learning various tools","Course on React and Redux by Codevolution and Traversy Media","Course on Next Js-Frontend Framework for react ","Collaborated with 8  team members to incorporate visual designs into functional web pages","Built 4 landing pages to support email marketing campaigns and promotions"],
    }
]

const Projects = [
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    },
    {
        title:"Project 1",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste debitis error enim, facilis et!"
    }
];

const Skills = [
    {
        reactIcon:<FaHtml5 className="skill__icon__style" />,
        name:"HTML5",
        description:"Advanced",
    },
    {
        reactIcon:<DiJavascript1 className="skill__icon__style"/>,
        name:"VANILA JAVASCRIPT (ES-6)",
        description:"Advanced",
    },
    {
        reactIcon:<FaCss3Alt className="skill__icon__style"/>,
        name:"CSS3",
        description:"Advanced",
    },
    {
        reactIcon:<FaReact className="skill__icon__style"/>,
        name:"REACT JS",
        description:"Excellent"
    },
    {
        reactIcon:<FaBootstrap className="skill__icon__style"/>,
        name:"Bootstrap",
        description:"Advanced"
    },
    {
        reactIcon:<FaReact className="skill__icon__style"/>,
        name:"GraphQL",
        description:"Basic"
    },
    {
        reactIcon:<SiRedux className="skill__icon__style"/>,
        name:"REDUX",
        description:"Intermediate"
    },
    {
        reactIcon:<SiNextDotJs className="skill__icon__style"/>,
        name:"Next JS",
        description:"Intermediate"
    },
    {
        reactIcon:<BiTransferAlt className="skill__icon__style"/>,
        name:"Axios",
        description:"Advanced"
    },
    {
        reactIcon:<SiMocha className="skill__icon__style"/>,
        name:"Mocha-Chai",
        description:"Intermediate"
    },
    {
        reactIcon:<SiNpm className="skill__icon__style"/>,
        name:"NPM/Yarn",
        description:"Intermediate"
    },
];

const Review = [
    {
        quote:"He is great to work with,helfull and have team spirit",
        testiName:"Anish Kumar",
        title:"CEO",
        companyName:"VAIMS"
    },
    {
        quote:"If he is with you, he will hold your hands from beginning to end ",
        testiName:"Lalit Kumar",
        title:"PM",
        companyName:"CHAKRA"},
    {
        quote:"Dedication,Freshthinking and passion ",
        testiName:"Amit Tiwari",
        title:"Director",
        companyName:"Graphnile"
    },
];

export  {AboutYou,Projects,Skills,Review,ResumeExperience,ResumeSkill};
