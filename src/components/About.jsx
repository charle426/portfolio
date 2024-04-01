import { motion } from "framer-motion";
import aboutme from "../assets/about-me.png";
import Skills from "./skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function About({ setPageNav }) {
  return (
    <motion.section
      id="about"
      onViewportEnter={() => setPageNav("about")}
      initial={{}}
      viewport={{ amount: 0.5 }}
      className="py-[50px]"
    >
      <div className="flex flex-col items-center justify-center w-full text-center ">
        <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">ABOUT</h1>
        <p className="max-w-[700px]"></p>
        <div className="h-[2px] mt-5 w-[110px] bg-gray-200 mb-[30px] flex justify-center items-center">
          <div className="h-[4px] w-[40px] bg-blue-600"></div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col item-center justify-center sm:items-start mb-10 gap-5">
        <div>
          <img src={aboutme} alt="" className="max-w-[400px]" />
        </div>
        <div>
          <h3 className="text-[2rem] md:text-[2.8rem]">Frontend Developer</h3>
          <p className="max-w-[600px]">
            Started my tech journey early 2023 learnt a lot from very good
            tutors and even further self taught myself so i could learn more
            about what I love doing
          </p>
          <div className="flex mt-8 sm:flex-row justify-between gap-5 flex-col">
            <ul className="list-about w-full flex flex-col gap-5">
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Birthday:</h4>
                  <p>26 JUNE 2004</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Age:</h4>
                  <p>20</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Phone:</h4>
                  <p>+2348127187791</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">City:</h4>
                  <p>Aba, Nigeria</p>
                </div>
              </li>
            </ul>
            <ul className="list-about flex w-full flex-col gap-5">
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Freelance:</h4>
                  <p>Available</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Website:</h4>
                  <p>
                    <a href="">www.akachukwu.com</a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Email:</h4>
                  <p>charlesakachi@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-800"
                />
                <div className="flex gap-2">
                  <h4 className="font-bold">Degree:</h4>
                  <p>None</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
}
