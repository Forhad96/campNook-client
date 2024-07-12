import React from "react";
// import {
//   FaGoogleDrive,
//   FaInstagram,
//   FaTwitter,
//   FaFacebookF,
// } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-72 bg-red-00 mt-96 md:mt-40 md:px-20">
      <div className="w-full h-full bg-lue-200 flex flex-col md:flex-row justify-center md:justify-between">
        <div className="md:w-1/3 flex flex-col items-center justify-center md:items-start md:justify-start px-24 md:px-0 lg:pr-10 mb-16 md:mb-0">
          <div className="w-[131px]">
            <img
              src="https://i.ibb.co/nsjDGt1/Frame-13.png"
              alt="logo"
              className="h-[34px] cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <p className="mt-10 text-xl font-bold mb-2">Address</p>
          <p>House #20 (3rd Floor) Road # 17, Nikanjia-2 Dhaka, Bangladesh.</p>
        </div>
        <div className="md:w-1/3 flex flex-col gap-1 bg-red-00 items-center justify-center md:items-start md:justify-start px-24 md:px-0 md:pl-10 mb-16 md:mb-0">
          <p className="text-xl font-bold mb-2">Products</p>
          <p className="hover:text-custom-orange duration-500 transition ease-in-out cursor-pointer">
            Text to speech
          </p>
          <p className="hover:text-custom-orange duration-500 transition ease-in-out cursor-pointer">
            Transcription
          </p>
          <p className="hover:text-custom-orange duration-500 transition ease-in-out cursor-pointer">
            Voice Cloning
          </p>
          <p className="hover:text-custom-orange duration-500 transition ease-in-out cursor-pointer">
            Voice over Video
          </p>
          <p className="hover:text-custom-orange duration-500 transition ease-in-out cursor-pointer">
            Video Changer
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col bg-red-00 items-center justify-center md:items-start md:justify-start">
          <p className="text-xl font-bold mb-2">Get In Touch With Us</p>
          <div className="flex md:flex-col lg:flex-row gap-3 mt-2">
            <div className="border border-text-color2 rounded-3xl px-4 py-3 text-text-color2 lg:w-72">
              <p>Email Address</p>
            </div>
            <div className="rounded-3xl w-20 lg:w-auto px-5 lg:px-8 py-3 bg-orange-500 text-white">
              <p>SEND</p>
            </div>
          </div>
          {/* 
          <div className="flex gap-5 mt-10 mb-10 md:mb-0">
            <div className="lg:w-14 md:w-10 lg:h-14 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white lg:text-2xl hover:text-custom-orange duration-500 transition ease-in-out">
              <FaGoogleDrive />
            </div>
            <div className="lg:w-14 md:w-10 lg:h-14 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white lg:text-2xl hover:text-custom-orange duration-500 transition ease-in-out">
              <FaInstagram />
            </div>
            <div className="lg:w-14 md:w-10 lg:h-14 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white lg:text-2xl hover:text-custom-orange duration-500 transition ease-in-out">
              <FaTwitter />
            </div>
            <div className="lg:w-14 md:w-10 lg:h-14 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white lg:text-2xl hover:text-custom-orange duration-500 transition ease-in-out">
              <FaFacebookF />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
