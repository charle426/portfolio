import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Form() {
  const form = useRef()
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [btn, setBtn] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setMail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setBtn(true)
    emailjs
      .sendForm("service_2h4wex8", "template_ltzl7pk", form.current, {
        publicKey: "YAhNgQOwzVVAcHDRw",
      })
      .then(
        () => {
          alert(mail.name + " " + "your mail has been submitted");
          setMail({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setBtn(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
          
  }

  return (
    <div className="w-full md:pr-[70px] ">
      <form onSubmit={handleSubmit} ref={form}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={mail.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="focus:border-blue-600 outline-none peer border-[1px] w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={mail.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="focus:border-blue-600 outline-none peer border-[1px] w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <input
            type="text"
            name="subject"
            value={mail.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="focus:border-blue-600 outline-none border-[1px] peer w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
          />
        </div>
        <div className="w-full mt-5">
          <textarea
            rows="6"
            required
            className="focus:border-blue-600 outline-none border-[1px] w-full
          border-gray-400 py-2 px-3 rounded-md bg-transparent  peer"
            placeholder="Message"
            name="message"
            value={mail.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <p className="text-[12px] text-red-500 invisible peer-required:visible">
          Please fill form correctly
        </p>
        <div className="w-full flex justify-center mt-5">
          {btn ? (
            <button
              type="submit"
              className="rounded-[30px] px-5 py-3 text-white bg-blue-600 pointer-events-none cursor-wait opacity-60"
            >
              Please Wait... 
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-[30px] px-5 py-3 text-white bg-blue-600"
            >
              Send Message
            </button>
        )}
        </div>
      </form>
    </div>
  );
}
