import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationPin,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Form from "./Form";
export default function ContactForm({ setPageNav }) {
  return (
    <motion.section
      onViewportEnter={() => setPageNav("contact")}
      initial={{}}
      viewport={{ amount: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center w-full text-center ">
        <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">CONTACT</h1>
        <p className="max-w-[700px]"></p>
        <div className="h-[2px] mt-5 w-[110px] bg-gray-200 mb-[30px] flex justify-center items-center">
          <div className="h-[4px] w-[40px] bg-blue-600"></div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
        <div className="flex flex-col w-full max-w-[550px] gap-5">
          <div className="flex gap-3 group">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white duration-300">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Call:</h3>
              <p className="text-[15px]">+234 81 271 877 91</p>
            </div>
          </div>
          <div className="flex gap-3 group">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white duration-300">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Email:</h3>
              <p className="text-[15px]">charlesakachi4@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 group">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white duration-300">
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Location:</h3>
              <p className="text-[15px]">
                Km5 Ikot Ekpene Road Alaoji Aba Abia State Nigeria
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </motion.section>
  );
}
