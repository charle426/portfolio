import { faDatabase, faHome, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faUser } from "@fortawesome/free-regular-svg-icons";

// import {fonts} from "font-awesome"
export default function Navbar({ pageNav }) {
  return (
    <nav className="relative  w-full flex justify-end">
      <input type="checkbox" id="toggle" className="nav-toggle hidden" />
      <label
        htmlFor="toggle"
        className="toggle m-5 z-[1000] top-0 fixed w-full right-4 md:hidden rounded-full bg-blue-600 p-3 h-[60px] items-center max-w-[60px] flex flex-col gap-[7px] justify-center"
      >
        <div></div>
        <div></div>
        <div></div>
      </label>
      <section className="navbar duration-500 z-[1000] fixed flex md:translate-x-0 translate-x-[300px] top-[20%] opacity-0 md:opacity-100">
        <div className="flex flex-col gap-5 items-end">
          <a href="#home">
            <div
              className={
                pageNav == "home"
                  ? "bg-blue-600 drop-shadow text-white rounded-full group hover:gap-2 duration-500 flex items-center justify-center px-[15px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center px-[15px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="text-[18px] duration-500 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Home
              </span>
            </div>
          </a>
          <a href="#about">
            <div
              className={
                pageNav == "about"
                  ? "bg-blue-600 drop-shadow text-white rounded-full group hover:gap-2 duration-500 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="text-[18px] duration-500 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                About
              </span>
            </div>
          </a>
          <a href="#resume">
            <div
              className={
                pageNav == "resume"
                  ? "bg-blue-600 drop-shadow text-white rounded-full group hover:gap-2 duration-500 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold">
                <FontAwesomeIcon icon={faFile} />
              </span>
              <span className="text-[18px] duration-500 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Resume
              </span>
            </div>
          </a>
          <a href="#portfolio">
            <div
              className={
                pageNav == "portfolio"
                  ? "bg-blue-600 drop-shadow text-white rounded-full group hover:gap-2 duration-500 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center px-[18px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold">
                <FontAwesomeIcon icon={faDatabase} />
              </span>
              <span className="text-[18px] duration-500 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Portfolio
              </span>
            </div>
          </a>
          <a href="#contact">
            <div
              className={
                pageNav == "contact"
                  ? "bg-blue-600 drop-shadow text-white rounded-full group hover:gap-2 duration-500 flex items-center justify-center px-[16px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center px-[16px] py-[10px] p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="text-[18px] duration-500 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Contact
              </span>
            </div>
          </a>
        </div>
      </section>
    </nav>
  );
}
