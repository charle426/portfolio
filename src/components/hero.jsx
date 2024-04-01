import { motion } from "framer-motion";
// import { typed } from "typed.js"
import heroImg from "../assets/hero-me.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Home({ setPageNav }) {
  // 
  return (
    <motion.section
      id="home"
      onViewportEnter={() => setPageNav("home")}
      initial={{}}
      viewport={{ amount: 0.5 }}
      className="h-[80vh] sm:h-[100vh] bg-[#f9f9f9] relative home overflow-hidden flex flex-col justify-center items-center"
    >
      <img
        src={heroImg}
        alt="hero img"
        className="absolute left-0 top-0 rounded-e-full w-[95%] md:max-w-[40%]"
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1, type: "string" }}
        className="w-full relative z-50"
      >
        <div>
          <h1 className="text-[2.5rem] md:text-[3.5rem]  font-semibold ">
            <span className="animate-bounce">
              <FontAwesomeIcon icon={faHandPeace} shake />
            </span>
            Am Akachukwu Charles
          </h1>
          <p className="text-blue-600 text-[12px]">Akachi for short 😉</p>
          <h3 className="text-[3rem] ">Am a Software Developer</h3>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://twitter.com/charles_akachi">
            <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </a>
          <a href="#">
            <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a>
          <a href="#">
            <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </a>
          <a href="#">
            <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
              <FontAwesomeIcon icon={faTelegram} />
            </div>
          </a>
          <a href="www.linkedin.com/in/uzoma-charles-664696281">
            <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
