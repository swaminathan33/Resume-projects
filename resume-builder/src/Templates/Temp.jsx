import React from "react";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaFileSignature } from "react-icons/fa";

const Temp = () => {
  const personal = useSelector((state) => state.FormDetails.form.personal);
  const experience = useSelector((state) => state.FormDetails.form.experience);
  const skills = [
    "Reactjs",
    "Tailwind",
    "Css Html",
    "Photoshop",
    "Illustrator",
  ];
  return (
    <div className="p-4">
      <div className="top">
        <div className="name text-3xl font-semibold">E SWAMINATHAN</div>
        <div className="job text-blue-500 font-semibold">
          Front End Developer Intern
        </div>
        <div className="flex text-sm font-semibold gap-44">
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            8807245117
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-blue-500" />
            swami008457@gmail.com
          </div>
        </div>
        <div className="flex text-sm gap-10 font-semibold">
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-500" />{" "}
            https://www.linkedin.com/in/swami-nathan-697689268
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-blue-500" /> Malleswaram, Bangalore
          </div>
        </div>
      </div>
      <div className="experience">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          EXPERIENCE
        </h2>
        <div className="pb-5 border-b-2 border-dashed w-4/6 pt-2">
          <div className="title font-medium">Front End Developer Intern</div>
          <div className="company text-blue-500 font-semibold">
            CodingSpaceOfIndia
          </div>
          <div className="date text-sm">05/2025 - 07/2024</div>
          <div className="description text-sm">
            <p>Company Description</p>
            <ul className="list-disc">
              <li className="ml-10">
                Build a Modern Dashboard with reactjs for a BitCoin Company.
              </li>
              <li className="ml-10">
                Worked with other Senior developers to solve the webapp issues.
              </li>
              <li className="ml-10">
                Built Dynamic Webpages for the BitCoin Company Dashboard
              </li>
              <li className="ml-10">
                Added Animations and Transitions in Webpages using Framer Motion
                Library
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-5 border-b-2 border-dashed w-3/6 pt-2">
          <div className="title font-medium">Graphic Designer</div>
          <div className="company text-blue-500 font-semibold">
            Ga Software Technology
          </div>
          <div className="date text-sm">07/2023 - 01/2024</div>
          <div className="description text-sm">
            <p>Company Description</p>
            <ul className="list-disc">
              <li className="ml-10">
                Created many designs with Photoshop and Illustrator for a event
                management Company{" "}
              </li>
              <li className="ml-10">
                Worked in a government CMS Full Stack website
              </li>
              <li className="ml-10">
                Tested many government related Mern Stack Websites
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Skills">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          SKILLS
        </h2>

        <div className="flex w-4/6 flex-wrap my-5">
          {skills.map((i, index) => {
            return (
              <div
                key={index}
                className="mr-20 font-medium underline underline-offset-4"
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <div className="education">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          EDUCATION
        </h2>
        <div className="college">
          <div className="font-semibold">Bachelor Of Computer Application</div>
          <div className="font-semibold text-blue-500">
            Indira Gandhi Open University
          </div>
          <div className="text-sm">06/2024 - present</div>
        </div>
      </div>

      <div className="online">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          FIND ME ONLINE
        </h2>
        <div className="flex gap-20">
          <div className="flex gap-3 items-start mt-1">
            <div className="icon mt-1 ">
              <GiEarthAmerica className="text-blue-500" />
            </div>
            <div className="text">
              <div className="title font-semibold">Github</div>
              <div className="link text-sm">
                https://github.com/swaminathan33
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start mt-1">
            <div className="icon mt-1 ">
              <FaFileSignature className="text-blue-500" />
            </div>
            <div className="text">
              <div className="title font-semibold">Portfolio</div>
              <div className="link text-sm w-5/6">
                https://swaminathanportfolio.blogspot.com/2024/07/blog-post.html
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="languages">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-4">
          LANGUAGES
        </h2>
        <div className="flex items-center gap-7 mt-1">
          <div className="text">
            <div className="font-semibold">English</div>
            <div className="text-sm">Intermediate</div>
          </div>
          <div className="flex gap-1">
            <FaCircle className="text-blue-500" />
            <FaCircle className="text-blue-500" />
            <FaCircle className="text-blue-500" />
            <FaCircle className="text-gray-300" />
            <FaCircle className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
