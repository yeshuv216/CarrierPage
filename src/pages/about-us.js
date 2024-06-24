import BenefitsExperiencesCarousel from "@/components/BenefitsExperiencesCarousel";
import BookingForm from "@/components/BookingForm";
import HomeCarousel from "@/components/HomeCarousel";
import Achivements from "@/components/Achivements";
import { benefitExperiences, benefits } from "@/lib/contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function AboutUs() {
  // img
  const animateRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // enhance investment section amimation
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: animateRef?.current,
            start: "top bottom",
            end: "+=800",
            scrub: 0.5,
            snap: 0.5,
          },
        })
        .to(imgRef?.current, {
          width: `100%`,
          height: "155%",
          ease: "power1.inOut",
          transformStyle: "preserve-3d",
        });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: animateRef?.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 0.5,
            snap: 0.5,
          },
        })
        .to(imgRef?.current, {
          width: `100%`,
          height: "155%",
          ease: "power1.inOut",
          transformStyle: "preserve-3d",
        });
    });

    const imgZooming = document?.querySelectorAll(".img-zooming");
    if (imgZooming) {
      Array.from(imgZooming).map((item) => {
        gsap.to(item, {
          scale: 1,
          duration: 5,
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause resume reset",
          },
        });
      });
    }
  });

  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>

      <section  className="relative">
      <video
          id="video"
          style={{filter:"brightness('30%')"}}
          src="/videos1/3.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[100vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          id="video"
          src="/videos1/3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos1/3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="font-ElMessiri title text-center mt-1">
          Who We Are
          </h1>
        </div>
      
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
         <div className="h-[15vh] lg:h-[15vh]">
                  <Image
                    src={require('../../public/img/monogram.png')}
                    width={106}
                    height={106}
                    alt="beyond points"
                  />
                </div>
        <h1 className=" font-ElMessiri title text-center mt-3 text-green text-2xl">Some headline for About</h1>
        <p className="font-ElMessiri font-extralight para text-center text-black mt-4 w-full lg:w-[70%]">
        Our content marketing services focus on creating high-quality,valuable.
          <br /> <br />
         content that resonates with your audience, drives engagement, and builds
          <br /> <br />
          brand authority
        </p>
      </section>

      <div className="relative horizontal ml-[30%] h-[20vh] lg:h-[25vh] w-[850px] lg:w-[660px]">
           
                <div
                  className="h-[23vh] lg:h-[20vh] mt-10 text-black text-center px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                  <div className=" ml-[25%]" style={{height:2,width:'50%',backgroundColor:'#B89238'}}></div>
                  <h1 style={{color:'#014F54'}} st className="font-manrope text-xl mt-[5%] lg:text-sm">
                  WHAT WE DO
                  </h1>
                  <p className="para mt-2 lg:mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
                </div>
                <div
                  className="h-[23vh] lg:h-[20vh] mt-10 text-black text-center px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                   <div className=" ml-[25%]" style={{height:2,width:'50%',backgroundColor:'#B89238'}}></div>
                  <h1 style={{color:'#014F54'}} st className="font-manrope text-xl mt-[5%] lg:text-sm">
                  WHAT WE WAN DO
                  </h1>
                  <p className="para mt-2 lg:mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
                </div>
              </div>
              <section style={{flexDirection:'row'}} className="row pt-16 lg:pt-38 mb-20 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#373535]">
      <div style={{marginLeft:'20%'}} className="relative h-[5vh] lg:h-[5vh] lg:ml-20 w-20vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    12+
                  </h1>
                  <p className="font-Manrope font-light para mt-2 lg:mt-2 text-white">Lorem Ipsum</p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    10+
                  </h1>
                  <p className="font-Manrope font-light  para mt-2 lg:mt-2 text-white">Countries with happy  <br /> <br />
                  customers </p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    204+
                  </h1>
                  <p className="ont-Manrope font-light  para mt-2 lg:mt-2 text-white">Clients across globe <br /> <br /></p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    204+
                  </h1>
                  <p className="font-Manrope font-light  text-weight-300 para mt-2 lg:mt-2 text-white">Total projects completed<br /> <br /></p>
                </div>
                </section>
                <section
        className="grid place-items mt-16 lg:mt-24 container w-9/12"
      >
        <h1 className=" font-ElMessiri title  mt-3 text-green text-2xl">Vision and mission </h1>
        <p className="font-ElMessiri font-extralight para  text-black mt-4 w-full lg:w-[100%]">
          Our content marketing services focus on creating high-quality, valuable
          <br /> <br />
          content that resonates with your audience, drives engagement, and builds
          <br /> <br />
          brand authority
        </p>
      </section>
      <div className="relative horizontal ml-[11%] h-[20vh] lg:h-[25vh] w-[850px] lg:w-[660px]">
           
           <div
             className="h-[23vh] lg:h-[20vh] mt-10 text-black px-4
            lg:px-8 py-3.5 lg:py-6"
           >
             <div  style={{height:2,width:'24%',backgroundColor:'#B89238'}}></div>
             <h1 style={{color:'#014F54'}} st className="font-manrope text-xl mt-[5%] lg:text-sm">
             Aspiration & Purpose
             </h1>
             <p className="font-manrope para mt-2 lg:mt-4">Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
           </div>
           
         </div>
      <section className="pt-16 lg:pt-28 mt-5 lg:mt-5 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#000000]">
        <h1 className="title text-center text-white  w-11/12 mx-auto">
        Have a Project in Mind
        </h1>
        <BookingForm />
      </section>
    </>
  );
}
