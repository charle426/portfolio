import frontendCert from "../assets/frontend-cert.png"
import fullstack from "../assets/fullstack.png"
import codathon from "../assets/codathon.png"
// import {motion} from "framer-motion"
export default function Cert() {
    return (
      <section>
        <div className="flex flex-col items-center justify-center w-full text-center ">
          <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">
            CERTIFICATIONS
          </h1>
          <p className="max-w-[700px]"></p>
          <div className="h-[2px] mt-5 w-[110px] bg-gray-200 mb-[30px] flex justify-center items-center">
            <div className="h-[4px] w-[40px] bg-blue-600"></div>
          </div>
        </div>
        <div className="auto-gri items-start justify-start md:mr-20">
          <div className="flex flex-col gap-3">
            <div>
              <img
                src={frontendCert}
                className="w-full rounded-md max-w-[450px]"
              />
            </div>
            <div>
              <p>
                Certificate of achievement for successful completion of Frontend
                Website Development Training in Webdeves
              </p>
              <p className="text-[13px] my-2">24th November 2023</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img
                src={fullstack}
                className="w-full rounded-md max-w-[450px]"
              />
            </div>
            <div>
              <p>
                This certificate is awarded to Uzoma Akachi Charles upon
                completion of Innovation Growth Hub Developers and Netpreneurs
                Fellowship Fullstack Website Development Training
              </p>
              <p className="text-[13px] my-2">19th December 2023</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img src={codathon} className="w-full rounded-md max-w-[450px]" />
            </div>
            <div>
              <p>
                For participating in Codathon 2023 <br />
                The Webdeves 3hrs long coding competition
              </p>
              <p className="text-[13px] my-2">Held on 21th November 2023</p>
            </div>
          </div>
        </div>
      </section>
    );
}