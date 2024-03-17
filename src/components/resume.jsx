import {motion} from "framer-motion"
import Cert from "./cert";
export default function Resume({ setPageNav }) {
  return (
      <>
      <motion.section
        id="resume"
        onViewportEnter={() => setPageNav("resume")}
        initial={{}}
        viewport={{ amount: 0.5 }}
        className="py-[150px]"
      >
        <div className="flex flex-col items-center justify-center w-full text-center ">
          <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">RESUME</h1>
          <p className="max-w-[700px]"></p>
          <div className="h-[2px] mt-5 w-[110px] bg-gray-200 mb-[30px] flex justify-center items-center">
            <div className="h-[4px] w-[40px] bg-blue-600"></div>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row md:pr-20 gap-8">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[35px] font-semibold mb-3">Summary</h3>
              <div className="pl-4 relative border-blue-600 border-l-2">
                <div className="resume-info relative">
                  <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                    Akachukwu Uzoma
                  </p>
                  <p className="max-w-[350px] mb-4">
                    Innovative and deadline-driven Frontend Developer with 1+
                    years of experience coding and developing user-centered web
                    applications building web apps from initial concept to
                    final, polished deliverable.
                  </p>
                  <ul className="list-disc list-inside max-w-[350px] flex flex-col gap-3">
                    <li>Km5 Ikot Ekpene, Alaoji, Abia State, Nigeria</li>
                    <li>+2348127187791</li>
                    <li>charlesakachi4@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[35px] font-semibold mb-3">Education</h3>
              <div className="pl-4 relative border-blue-600 border-l-2">
                <div>
                  <div className="resume-info relative">
                    <div className="flex sm:items-center items-start gap-5">
                      <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                        Webdeves Academy
                      </p>
                      <p className="text-[15px] mb-5 font-semibold leading-none">
                        20th January 2023 - 17th April 2023
                      </p>
                    </div>
                    <p className="max-w-[350px] mb-4">
                      In Webdeves Academy I was taught to build user-based
                      frontend applications, It was an exciting journey learn to
                      code and create beautiful website through it was
                      challenging i graduated a Frontend Developer
                    </p>
                  </div>
                  <div className="resume-info relative">
                    <div className="flex sm:items-center items-start gap-5">
                      <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                        Innovation Growth Hub (ighub)
                      </p>
                      <p className="text-[15px] mb-5 font-semibold leading-none">
                        14th July 2023 - 19th December 2023
                      </p>
                    </div>
                    <p className="max-w-[350px] mb-4">
                      Right after Webdeves Academy I entered a free fellowship
                      training in ighub where I was taught to build user-based
                      full-stack applications, with HTML, CSS, JavaScript,
                      NodeJs, Express and Mongodb this wasn't as challenging as
                      I already knew frontend technologies so I help teach
                      fellow about those after classes and i graduated a
                      Full-stack Developer by December
                    </p>
                  </div>
                  <div className="resume-info relative">
                    <div className="flex sm:items-center items-start gap-5">
                      <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                        Self-taught
                      </p>
                    </div>
                    <p className="max-w-[350px] mb-4">
                      During my free time I learnt to code in reactJs using
                      scramba and other great tools learn then built a lot of
                      projects with it as I discovered that project-based
                      learning was the best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[35px] font-semibold mb-3">Experience</h3>
            <div className="pl-4 relative border-blue-600 border-l-2">
              <div>
                <div className="resume-info relative">
                  <div className="flex sm:items-center items-start gap-5">
                    <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                      Freelancing
                    </p>
                    <p className="text-[15px] mb-5 font-semibold leading-none">
                      Present
                    </p>
                  </div>
                  <ul className="list-disc list-outside p-3 max-w-[500px] flex flex-col gap-3">
                    <li>Lead engineer in development of stove website, Stove a company that specializes in freight and delivery of gasoline products including a home refill</li>
                    <li>redesigned nairaMe website into a better appealing one</li>
                    <li>created a crypto website to  help advertize and enlighten people more about crypto trading and cryptocurrency</li>
                  </ul>
                </div>
                <div className="resume-info relative">
                  <div className="flex sm:items-center items-start gap-5">
                    <p className="text-blue-600 text-[25px] mb-5 font-semibold leading-none">
                      Webdeves Codathon
                    </p>
                    <p className="text-[15px] mb-5 font-semibold leading-none">
                       November 2023
                    </p>
                  </div>
                  <p className="max-w-[350px] mb-4">
                    Won a reward for winning a codaton challenge of coding the best ui in a limited time
                  </p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Cert/>
      </>
    );
}