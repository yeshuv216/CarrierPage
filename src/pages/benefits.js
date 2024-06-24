import { cn } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";
import { benefitExperiences, benefits as data } from "@/lib/contants";
import BenefitsExperiencesCarousel from "@/components/BenefitsExperiencesCarousel";
import { useEffect } from "react";
import Ukiyo from "ukiyojs";
import Link from "next/link";

const BigCard = ({ id, img, title, desc }) => {
  return (
    <div>
      <Image
        src={img}
        height={1980}
        width={1080}
        alt="benefits"
        data-u-scale="1.3"
        className="benefitsImg ukiyo"
      />
      <div data-fade-up className="benefitsBox lg:px-28">
        <div className="flex items-center gap-6">
          <h4 className="text-base">{id}</h4>
          <div className="h-[0.5px] bg-grey w-56"></div>
        </div>
        <h2 className="benefitsTitle">{title}</h2>
        <p className="benefitsDesc">{desc}</p>
        {title=="F&B BENEFITS"?<Link
            style={{justifyContent:'center',textAlign:'center',alignContent:'center'}}
            href='https://www.melia.com/en/hotels/united-arab-emirates/dubai/me-dubai/restaurants'
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-black text-white w-[140px] mt-10"
          >
            Discover
          </Link>:null}
      </div>
    </div>
  );
};

const SmallCard = ({ id, img, title, desc }) => {
  return (
    <div className={cn("lg:px-28", id === "02" ? "lg:mt-[30vh]" : "")}>
      <Image
        src={img}
        height={1980}
        width={1080}
        alt="benefits"
        data-u-scale="1.3"
        className="benefitsImg object-bottom ukiyo"
      />
      <div data-fade-up className="benefitsBox">
        <div className="flex items-center gap-6">
          <h4 className="text-base">{id}</h4>
          <div className="h-[0.5px] bg-grey w-56"></div>
        </div>
        <h2 className="benefitsTitle">{title}</h2>
        <p className="benefitsDesc">{desc}</p>
        {title=="GUEST ACCOMMODATIONS"?<Link
            style={{justifyContent:'center',textAlign:'center',alignContent:'center'}}
            href='https://www.melia.com/en/hotels/united-arab-emirates/dubai/me-dubai/rooms'
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-black text-white w-[140px] mt-10"
          >
            Discover
          </Link>:null}
          {title=="EVENT VENUES"?<Link
            style={{justifyContent:'center',textAlign:'center',alignContent:'center'}}
            href='https://www.melia.com/en/hotels/united-arab-emirates/dubai/me-dubai/meetings'
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-black text-white w-[140px] mt-10"
          >
            Discover
          </Link>:null}
          
      </div>
    </div>
  );
};

const Benefits = () => {
  useEffect(() => {
    const parallax = new Ukiyo(".ukiyo");

    return () => {
      parallax.destroy();
    };
  }, []);

  return (
    <main>
      <Head>
        <title>Omniyat | Benefits</title>
      </Head>
      <section className="relative">
        <Image
          src="/img/benefits/benefits.png"
          height={1980}
          width={1080}
          alt="benefits"
          className="h-svh lg:h-screen w-screen object-cover object-bottom"
        />
      </section>

      <section className="bg-[#FAFAFA]">
        <div
          data-fade-up
          className="pt-16 lg:pt-32 container w-11/12 flex flex-col items-center"
        >
          <p className="subtitle text-center">Benefits include</p>
          <h1 className="title text-center mt-2 whitespace-nowrap">
            IMMEDIATE BENEFITS
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[45%]">
            Your residence at The Opus is not just a property; it&apos;s a
            masterpiece. With Omniyat, it also offers a regular, steady
            return on your investment.
          </p>
        </div>
      </section>

      <div className="bg-[#FAFAFA] w-full pt-16 pb-36 lg:pt-20">
        <section className="hidden lg:grid grid-cols-2 gap-16 w-full">
          <div className="flex flex-col gap-[25vh]">
            {data
              .filter((item) => parseInt(item.id) % 2 == 1)
              .map((d, idx) => {
                if (idx % 2 == 1) {
                  return (
                    <SmallCard
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      title={d.title}
                      desc={d.desc}
                    />
                  );
                } else {
                  return (
                    <BigCard
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      title={d.title}
                      desc={d.desc}
                    />
                  );
                }
              })}
          </div>

          {/* 2nd column  */}
          <div className="flex flex-col gap-12 lg:gap-[25vh]">
            {data
              .filter((item) => parseInt(item.id) % 2 == 0)
              .map((d, idx) => {
                if (idx % 2 == 1) {
                  return (
                    <BigCard
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      title={d.title}
                      desc={d.desc}
                    />
                  );
                } else {
                  return (
                    <SmallCard
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      title={d.title}
                      desc={d.desc}
                    />
                  );
                }
              })}
          </div>
        </section>

        <section className="flex justify-center lg:hidden">
          <div className="w-11/12 flex flex-col items-center gap-14">
            {data.map((item) => {
              return (
                <SmallCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </section>
      </div>

      <div className="-mt-20 lg:-mt-12 mb-20 lg:mb-40">
        <BenefitsExperiencesCarousel data={benefitExperiences} />
      </div>
    </main>
  );
};

export default Benefits;
