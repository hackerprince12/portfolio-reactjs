import { FaRegMessage } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
// import { IoStopwatchOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

import { useFormik } from "formik";
import { ContactSchema } from "../Schema/ContactSchema";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { errors, values, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: ContactSchema,
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ddgpjo8", "template_9hnx9kn", form.current, {
        publicKey: "HMuKzpSANKXT_lsRW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* <Navbar /> */}
      <div
        id="contact"
        className="flex pt-44 h-[100vh] bg-white  md:bg-yellow-400 justify-center  pb-12 md:8 items-center"
      >
        <div className="flex flex-col md:flex-row mt-4  md:bg-white lg:bg-white lg:card-side xl:h-[82vh] h-[82vh] w-[85vw] p-4 justify-center items-center">
          <div className="card   p-0 m-4 shadow-gray-400 rounded-none shadow-md">
            <div className="card-body">
              <h1 className="text-black text-3xl font-extrabold">Contact Us</h1>
              <p className="text-gray-700 text-sm">
                Free to contact us any time.We will get back to soon as we can!
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col  gap-y-2 ">
                  <label className="text-gray-600">Name: </label>
                  <input
                    className="px-2 py-1  bg-white text-black border-[1px] text-[16px]"
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    onChange={handleChange}
                    value={values.from_name}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {errors.from_name && touched.from_name ? (
                    <p className="text-red-500 text-sm">{errors.from_name}</p>
                  ) : null}
                  <label className="text-gray-600">Email: </label>
                  <input
                    name="from_email"
                    onChange={handleChange}
                    value={values.from_email}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="px-2 py-1  bg-white text-black border-[1px] text-[16px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.from_email && touched.from_email ? (
                    <p className="text-red-500 text-sm">{errors.from_email}</p>
                  ) : null}
                  <label className="text-gray-600">Message: </label>

                  <textarea
                    name="message"
                    type="text"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter your msg.."
                    className="text-[16px] border-[1px] 
                 bg-white text-black px-2 h-[80px]  py-1"
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  ) : null}
                </div>

                <div className="card-actions flex justify-end">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-600 text-white mt-1 hover:bg-blue-500"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex  justify-center items-center   ">
            <div className=" flex justify-start items-center px-12 sm:h-[50vh] sm:w-[60vw]  p-20 md:lg-[50vh] md:w-[30vw] lg:h-[60vh] lg:w-[30vw] bg-black">
              <div className="">
                <h1 className="text-xl text-white font-extrabold ">Info</h1>
                <div className="flex flex-row">
                  <FaRegMessage className="text-2xl mt-2 m-1 text-white" />
                  <h1 className="text-xl text-white overflow-hidden py-2">
                    princepatel7601@..com
                  </h1>
                </div>
                <div className="flex flex-row">
                  <IoIosCall className="text-2xl mt-2 m-1 text-white" />
                  <h1 className="text-xl text-white py-2">+91 80046 43571</h1>
                </div>

                <div className="flex flex-row">
                  <FaBuilding className="text-2xl mt-2 m-1 text-white" />
                  <h1 className="text-xl text-white py-2">NH-34 Varanasi</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
