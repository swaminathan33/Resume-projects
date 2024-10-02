import React from "react";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

const DefaultTemp = () => {
  const personal = useSelector((state) => state.FormDetails.form.personal);
  const experience = useSelector((state) => state.FormDetails.form.experience);
  const skills = useSelector((state) => state.FormDetails.form.skills);
  const education = useSelector((state) => state.FormDetails.form.education);

  return (
    <div className="p-4">
      <div className="top">
        <div className="name text-3xl font-semibold">{personal.name}</div>
        <div className="job text-blue-500 font-semibold">{personal.title}</div>
        <div className="flex text-sm font-semibold gap-44">
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            {personal.number}
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-blue-500" />
            {personal.email}
          </div>
        </div>
        <div className="flex text-sm gap-10 font-semibold">
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-500" />{" "}
            https://www.linkedin.com/in/swami-nathan-697689268
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <FaLocationDot className="text-blue-500" /> {personal.location}
          </div>
        </div>
      </div>
      <div className="experience">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          EXPERIENCE
        </h2>
        {[1, 2].map((i) => {
          return (
            <div className="pb-5 border-b-2 border-dashed w-3/6 pt-2">
              <div className="title font-medium">{experience.title}</div>
              <div className="company text-blue-500 font-semibold">
                {experience.company}
              </div>
              <div className="date text-sm">
                {experience.datefrom} - {experience.dateto}
              </div>
              <div className="description text-sm">
                <p>Company Description</p>
                <ul className="list-disc">
                  <li className="ml-10">{experience.description}</li>
                  <li className="ml-10">Build Many Apps with html and css</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Skills">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          SKILLS
        </h2>

        <div className="flex w-3/6 flex-wrap">
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
        {education.map((i) => {
          return (
            <div className="college">
              <div className="font-semibold">{i.course}</div>
              <div className="font-semibold text-blue-500">{i.college}</div>
              <div className="text-sm">
                {i.start} - {i.end}
              </div>
            </div>
          );
        })}
      </div>
      <div className="languages">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          LANGUAGES
        </h2>
        {[1, 2].map((i) => {
          return (
            <div className="flex items-center gap-7">
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
          );
        })}
      </div>
      <div className="online">
        <h2 className="font-semibold text-2xl border-b-4 border-black mt-5">
          FIND ME ONLINE
        </h2>
        <div className="flex gap-3 items-start">
          <div className="icon mt-1 ">
            <GiEarthAmerica className="text-blue-500" />
          </div>
          <div className="text">
            <div className="title font-semibold">Github</div>
            <div className="link text-sm">
              <a href="www.github.com">www.github.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTemp;
