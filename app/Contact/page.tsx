'use client'
import Button from "@/components/Button";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    description: "",
    acceptedTerms: false,
 });

 const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted!", formData);

    setFormData({
      firstName: "",
      lastName: "",
      businessEmail: "",
      phoneNumber: "",
      description: "",
      acceptedTerms: false,
    });
 };

  return (
    <>
      <section className="max-container padding-container flex flex-col gap-10 py-16 pb-20 lg:pb-40 md:gap-10 lg:py-20 relative">
        <div className="w-500 h-300 flex justify-center items-center animate-pop-In">
          <Image
            src="social-media.png"
            alt="Going Medieval Social"
            layout="relative"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="flex flex-col items-center lg:hidden pb-5 ">
          <h1 className=" text-center text-4xl bold-52 lg:bold-76">Contact us</h1>
            <p className="text-center pr-5">
              If you have any questions, suggestions, or just want to chat, feel free to reach out!
            </p>
        </div>
          <div className="flex justify-center   rounded-xl " style={{ backgroundColor: '#F8D2FF' }}>
          <div className="items-center mt-5 ml-5 flex-grow hidden lg:block lg:w-1/4 mr-5">
          <h1 className=" text-center text-4xl bold-52 lg:bold-76">Contact us</h1>
            <p className="text-center mt-5">
              If you have any questions, suggestions, or just want to chat, feel free to reach out!
            </p>
        </div>
            <div className="md:mr-5 mt-5 mb-5">
              <div>
            <form onSubmit={handleSubmit} className=" ">
              <div className="flex flex-col md:flex-row  gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="rounded-md border border-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="rounded-md border border-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business email*"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="rounded-md border border-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="rounded-md border border-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                />
              </div>
              <textarea
                name="description"
                placeholder="Message*"
                value={formData.description}
                onChange={handleChange}
                className="rounded-md w-full border border-gray-400 h-24 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                required
              ></textarea>
                <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  id="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="mr-2 accent-blue-500"
                />
                <label htmlFor="acceptedTerms" className="text-sm">
                  I agree to the terms and conditions.
                </label>
              </div>
              <Button type="submit" title="Send Message" variant="btn_dark_green" />
            </form>
            </div>
            </div>
          </div>
      </section>
    </>
  );
}
