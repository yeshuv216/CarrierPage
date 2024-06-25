import Link from "next/link";
import { CheveronDown } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-10">
      <div className="grid grid-cols-7 mb-2 pb-[15px] justify-items-center lg:justify-items-start">
        
        <div className="col-span-7 ml-[5vw] w-[40%] lg:col-span-1 mt-6 lg:mt-0 text-sm">
          <p className="text-[#7f7f7f]">Residential</p>
          <ul className="grid w-[100vw] grid-cols-2 lg:flex flex-col gap-1.5 lg:gap-1 mt-1">
            <li>
              <Link href="/">AVA at Palm Jumeirah,Dorcheseter collection</Link>
            </li>
            <li>
              <Link href="">ORLA INFINITY,Dorcheseter collection</Link>
            </li>
            <li>
              <Link href="">ORLA,Dorcheseter collection,Dubai</Link>
            </li>
            <li>
              <Link href="">VELA,Dorcheseter collection,Dubai</Link>
            </li>
            <li>
              <Link href="">VELA VIENTO,Dorcheseter collection,Dubai</Link>
            </li>
            <li>
              <Link href="">AVA AT PALM JUMEIRAH,Dorcheseter collection,Dubai</Link>
            </li>
          </ul>
        </div>
        <div className="ml-[20vw]">
          <p className="text-[#7f7f7f]">Mixed Use</p>
          <ul className="grid w-[100vw] flex flex-col gap-1 mt-1">
            <li>
              <Link href="/">The OPUS by OMNIYAT</Link>
            </li>
            <li>
              <Link href="/">The Lana,Dorcheseter collection,Dubai</Link>
            </li>
          </ul>
        </div>
        <div className="ml-[30vw]">
          <p className="text-[#7f7f7f]">Explore</p>
          <ul className="grid w-[100vw] grid grid-cols-2 lg:flex flex-col gap-1.5 lg:gap-1 mt-1">
            <li>
              <Link href="/">Our Story</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="/benefits">News</Link>
            </li>
          </ul>
        </div>
        <div className="ml-[30vw]">
        <p className="text-[#7f7f7f]">Stay in the know</p>
          <input
            className="border-1 border-l-white-500 text-white"
            style={{backgroundColor:'#000'}}
            placeholder="Email Address"
          >
          </input>
          <p className="text-sm text-[#7f7f7f] mt-2">
            By signing up i want to hear about new <br />
            updates and masterpieces and agree with <br />
            the data protection policy of Omniyat
          </p>
        </div>
      </div>

      <div className="border-t border-white border-opacity-5 pt-6 pb-20">
        <div className="grid grid-cols-7 justify-items-center lg:justify-items-start gap-y-4">
          <div className="lg:pl-16 text-sm col-span-7 lg:col-span-2 font-radikalLight">
            Omniyat &copy; 2023
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
              <CheveronDown className="size-2 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
