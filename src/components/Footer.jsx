import React, { useContext } from "react";
import Logo from "./icons/Logo";
import Link from "next/link";
import CheveronDownIcon from "./icons/CheveronDownIcon";
import { BookingFormContext } from "@/providers/BookingFormProvider";

const Footer = () => {
  const { setIsFromOpen } = useContext(BookingFormContext);
  return (
    <div className="bg-black text-white pt-10">
      <div className="grid grid-cols-7 mb-2 pb-[15px] justify-items-center lg:justify-items-start">
        <div className="col-span-7 lg:col-span-2 lg:pl-16 flex flex-col items-center lg:items-start">
          <Logo className="size-24 lg:size-32 lg:pl-2 lg:-mt-7" />
        </div>
        <div className="col-span-7 lg:col-span-1 mt-6 lg:mt-0 text-sm">
          <p className="text-[#7f7f7f]">Pages</p>
          <ul className="grid grid-cols-2 lg:flex flex-col gap-1.5 lg:gap-1 mt-1">
            <li>
              <Link href="/">Overview</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/benefits">Benefits</Link>
            </li>
            <li>
              <Link href="/rewards-privileges">Rewards & Privileges</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-1 mt-6 lg:mt-0 text-sm -ml-6 lg:ml-0">
          <p className="text-[#7f7f7f]">Queries</p>
          <ul className="flex flex-col gap-1 mt-1">
            <li>
              <Link href="/faqs">FAQS</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-1 block text-sm mt-6 lg:mt-0 -ml-6 lg:ml-0">
          <p className="text-[#7f7f7f]">Support</p>
          <ul className="flex flex-col gap-1 mt-1">
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-7 lg:col-span-2 mt-8 lg:mt-0 pt-2 text-sm hidden lg:flex flex-col items-center lg:items-start">
          <h1 className="text-xl font-bodoniModa uppercase">
            Stay in the know
          </h1>
          <button
            onClick={() => setIsFromOpen(true)}
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-white text-black w-[140px] mt-2"
          >
            Contact Us
          </button>
          <p className="mt-4 text-center lg:text-left font-light">
            By signing up i want to hear about new <br />
            updates and masterpieces and agree with <br />
            the data protection policy of Liv
          </p>
        </div>
      </div>

      <div className="border-t border-white border-opacity-5 pt-6 pb-20">
        <div className="grid grid-cols-7 justify-items-center lg:justify-items-start gap-y-4">
          <div className="lg:pl-16 text-sm col-span-7 lg:col-span-2 font-radikalLight">
            Omniyat &copy; 2024
          </div>
          <div className="col-span-7 lg:col-span-3 w-full"></div>
          <div className="col-span-7 lg:col-span-2 flex gap-4 text-sm ml-[20px] lg:ml-0">
            <label htmlFor="languageSelect" className="text-[#7f7f7f]">
              Language
            </label>

            <div className="relative">
              <select
                name="languageSelect"
                id="languageSelect"
                className="bg-black w-[80px] cursor-pointer pr-5"
                style={{
                  backgroundImage: "none",
                }}
              >
                <option value="en">English</option>
                <option value="gm">German</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
                <option value="ru">Russian</option>
              </select>
              <CheveronDownIcon className="size-2 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
