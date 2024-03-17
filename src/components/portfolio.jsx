import { motion } from "framer-motion"
import stove from "../assets/Screenshot (293).png";
import ggm from "../assets/Screenshot (294).png";
import nairaMe from "../assets/Screenshot (296).png";
import bitbit from "../assets/Screenshot (298).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
export default function Portfolio({ setPageNav }) {
    return (
      <motion.section
        id="portfolio"
        onViewportEnter={() => setPageNav("portfolio")}
        initial={{}}
        viewport={{ amount: 0.5 }}
        className="py-[150px]"
      >
        <div className="flex flex-col items-center justify-center w-full text-center ">
          <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">PORTFOLIO</h1>
          <p className="max-w-[700px]"></p>
          <div className="h-[2px] mt-5 w-[110px] bg-gray-200 mb-[30px] flex justify-center items-center">
            <div className="h-[4px] w-[40px] bg-blue-600"></div>
          </div>
        </div>
        <div className="auto-grid md:pr-20">
          <div className="flex flex-col gap-3">
            <div>
              <img
                src={stove}
                alt="stove website"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p>
                This project was built to help solve to the problem of having to
                lift heavy LPG gas cylinders and going all the way to a gas
                station for a refill why not do get a refill from the comfort of
                your home in Africa
              </p>
              <p className="text-[13px] my-2">
                reactJS, Tailwind, framer-motion and Firebase
              </p>
              <p>
                <a
                  href="stove.netlify.app"
                  className="text-blue-500 text-[13px]"
                >
                  <FontAwesomeIcon icon={faEye} /> visit website
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img
                src={nairaMe}
                alt="stove website"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p>
                In collaboration with NairaMe I was able to built them a better
                website than what they once had
              </p>
              <p className="text-[13px] my-2">
                reactJS, Tailwind, framer-motion
              </p>
              <p>
                <a
                  href="nairame.netlify.app"
                  className="text-blue-500 text-[13px]"
                >
                  <FontAwesomeIcon icon={faEye} /> visit website
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img src={ggm} alt="website" className="w-full rounded-md" />
            </div>
            <div>
              <p>
                Built a ministries website to help promote my pastor`s ministry
                and vision
              </p>
              <p className="text-[13px] my-2">
                reactJS, Tailwind, framer-motion and Firebase
              </p>
              <p>
                <a href="ggm.netlify.app" className="text-blue-500 text-[13px]">
                  <FontAwesomeIcon icon={faEye} /> visit website
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img
                src={bitbit}
                alt="stove website"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p>
                Built a crypto website not fully for the purpose for trading but
                to encourage trading and convince people to download the bitbit
                app and trade
              </p>
              <p className="text-[13px] my-2">reactJS, Tailwind</p>
              <p>
                <a
                  href="bitbit.netlify.app"
                  className="text-blue-500 text-[13px]"
                >
                  <FontAwesomeIcon icon={faEye} /> visit website
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
}