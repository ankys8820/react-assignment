import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillHome,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* LogoIcon */}
        <div className="flex ">
          <div className=" flex flex-col gap-7">
            <h1 className=" text-3xl font-bold text-red-900">eBAZAR</h1>
            <p className="text-white text-sm tracking-wide">@Made with React</p>
            <img
              src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg"
              alt="paymentLogo"
              className="w-56"
            />
            <div className="flex gap-5 text-lg ">
              <AiFillFacebook className="hover:text-white cursor-pointer" />
              <AiFillTwitterCircle className="hover:text-white cursor-pointer" />
              <AiFillInstagram className="hover:text-white cursor-pointer" />
              <AiFillYoutube className="hover:text-white cursor-pointer" />
              <AiFillHome className="hover:text-white cursor-pointer" />
            </div>
            {/* Logo Ends */}
            {/* <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Locate Us
              </h2>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
