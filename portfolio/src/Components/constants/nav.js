import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";


export const links = [
    {
      name: "Home",
      id: "app",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Coding Challenges",
      id: "challenges",
    },
    // {
    //   name: "Skills",
    //   id: "/",
    // },
    // {
    //   name: "Education",
    //   id: "/",
    // },
    
    // {
    //   name: "Experience",
    //   id: "/",
    // },
    // {
    //   name: "Contact",
    //   id: "/",
    // },
  ]

export const social_links = [
  {
    id:0,
    icon: FaLinkedin,
    url:'https://www.linkedin.com/in/swami-nathan-697689268/',
    tag:'Linked-In'
  },
  {
    id:1,
    icon: FaGithub,
    url:'https://github.com/swaminathan33',
    tag:'Github'
  },
  {
    id:2,
    icon:IoLogoMedium ,
    url:'https://medium.com/@swami008457',
    tag:'Medium'
  },
]

export default links