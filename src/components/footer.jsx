import { faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return (
      <section className="bg-[#f1f1f1] mt-10">
        <div className="flex flex-col justify-center items-center py-7">
          <h2 className="font-semibold mb-8 md:text-[3rem] text-[2rem]">
            Uzoma Akachukwu Charles
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <a href="#">
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
            <a href="#">
              <div className="rounded-full w-[40px] h-[40px] text-[22px] flex items-center justify-center bg-blue-600 text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </div>

          <div className="mb-3">
            <p>
              © Copyright <b>AkachiCodes</b>. All Rights Reserved
            </p>
          </div>
          <div>
            <p>Designed by Akachukwu</p>
          </div>
        </div>
      </section>
    );
}