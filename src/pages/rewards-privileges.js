import RewardsCarousel from "@/components/RewardsCarousel";
import DiamondIcon from "@/components/icons/DiamondIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Ukiyo from "ukiyojs";
import Link from "next/link";
const rewardsData = [
  {
    title: "More Value",
    img: "/img/rewards/livaside.jpeg",
    points: [
      "Earn 11 points for every € /$1 spent on the total booking exclusive prices",
      "Receive 2,000 welcome points",
      "Birthday surprise",
      "Enjoy free breakfast for one companion",
      "Complimentary Wi-Fi",
    ],
  },
  {
    title: "MORE POSSIBILITIES",
    img: "/img/rewards/morePossibility.jpeg",
    desc: "Collection and use of points across Meliá Hotels on:",
    points: [
      "Hotel stays",
      "Services within hotels",
      "Branded spas",
      "Partner companies",
    ],
  },
  {
    title: "MORE TIME",
    img: "/img/rewards/asset5.webp",
    points: ["Exclusive online check-in", "Priority access at check-in"],
  },
];

const RewardsPreviliges = () => {
  useEffect(() => {
    const parallax = new Ukiyo(".ukiyo");

    return () => {
      parallax.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    <main>
      <Head>
        <title>Omniyat | Rewards and Benefits</title>
      </Head>
      <section className="relative">
        <Image
          src="/img/rewards/asset1.webp"
          height={1980}
          width={1080}
          alt="benefits"
          className="h-svh lg:h-screen w-screen object-cover object-[50%_35%]"
        />
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
        <h1 className="title text-center">MELIÁREWARDS: BEYOND POINTS</h1>
        <p className="para text-center mt-6 lg:mt-8 w-full lg:w-[50%] text-pretty">
          While your residence is enrolled in Omniyat, you can enjoy a
          MeliáRewards Silver tier membership. MeliáRewards is the Meliá Hotels
          International loyalty program offering benefits and exclusive offers
          across Meliá Hotels.
        </p>

        <div className="flex flex-col gap-4 items-center mt-16">
          <DiamondIcon className="size-10" />
          <a
            href="https://www.melia.com/es/hoteles/emiratos-arabes-unidos/dubai/me-dubai"
            target="_blank"
            className="font-bodoniModa text-sm font-medium uppercase text-center"
          >
            MeliáRewards : <br /> Belonging Means More
          </a>
        </div>
      </section>

      <section className="relative mt-16 lg:mt-28">
        <Image
          src="/img/rewards/asset2.webp"
          width={1920}
          height={1080}
          alt="MeliáRewards"
          className="h-[45vh] lg:h-screen ukiyo"
        />
      </section>

      <section className="bg-[#FAFAFA]">
        <div
          data-fade-up
          className="grid place-items-center pt-10 lg:pt-28 pb-16 lg:pb-28 container w-11/12"
        >
          <p className="subtitle text-center">EXCLUSIVE BENEFITS OF THE</p>
          <h1 className="title text-center mt-2">
            MELIÁREWARDS: SILVER OWNERS
          </h1>
          <div className="para text-sm text-center mt-8 w-full lg:w-[35%] *:py-4">
            <p>VIP Treatment</p>
            <p className="border-t border-darkGreen border-opacity-15">
              20% discount on the MeliáRewards rate
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              15% discount on Food & Beverage and spas within Meliá Hotels
              International managed outlets
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              Unlimited nights
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              Maximum of 5 rooms per stay
            </p>
          </div>
          <Link
            style={{justifyContent:'center',textAlign:'center',alignContent:'center'}}
            href='https://www.melia.com/es/hoteles/emiratos-arabes-unidos/dubai/me-dubai'
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-black text-white w-[140px] mt-10"
          >
            Explore More
          </Link>
        </div>
      </section>

      <RewardsCarousel data={rewardsData} />

      <section className="relative overflow-hidden">
        <Image
          src="/img/rewards/asset5.webp"
          height={1980}
          width={1080}
          alt="benefits"
          className="h-[45vh] lg:h-screen w-screen object-cover object-center scale-150 img-zooming"
        />
      </section>

      <section
        data-fade-up
        className="mt-16 lg:mt-28 flex flex-col items-center relative container w-11/12"
      >
        <h1 className="title text-center">
          Your MeliáRewards <br className="hidden lg:block" /> and Special
          Privileges
        </h1>
        <p className="para text-center mt-6 lg:mt-8 w-full lg:w-[45%]">
          Your MeliáRewards card number serves as your identification to access
          exclusive benefits. Through all of Meliá&apos;s official channels
        </p>
      </section>

      <div className="bg-[#fafafa]">
        <section
          data-fade-up
          className="mt-16 lg:mt-28 flex flex-col items-center relative pt-16 lg:pt-28 pb-10 lg:pb-20 container w-11/12"
        >
          <div></div>
          <h1 className="title text-center">
            When it comes to hotel discounts <br /> at restaurants and Meliá
            spas :
          </h1>
          <p className="para text-center mt-6 lg:mt-8 w-full lg:w-[45%]">
            1. Identify yourself as a Meliá Hotels International Owner at the
            time of departure (during payment). <br /> <br />
            2. The hotel will acknowledge your ownership status and apply the
            applicable discounts accordingly.
          </p>
        </section>
      </div>
    </main>
  );
};

export default RewardsPreviliges;
