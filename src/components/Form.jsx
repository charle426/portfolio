import { useState } from "react";
export default function Form() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(mail.name + "your mail has been submitted");
  }
  return (
    <div className="w-full md:pr-[70px] ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={mail.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="focus:border-blue-600 outline-none border-[1px] w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
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
              className="focus:border-blue-600 outline-none border-[1px] w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
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
            className="focus:border-blue-600 outline-none border-[1px] w-full border-gray-400 py-2 px-3 rounded-md bg-transparent"
          />
        </div>
        <div className="w-full mt-5">
          <textarea
            rows="6"
            className="focus:border-blue-600 outline-none border-[1px] w-full
          border-gray-400 py-2 px-3 rounded-md bg-transparent" placeholder="Message" name="message" value={ mail.subject } onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button type="submit" className="rounded-[30px] px-5 py-3 text-white bg-blue-600">Send Message</button>
        </div>
      </form>
    </div>
  );
}
