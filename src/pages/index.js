import BookingForm from "@/components/BookingForm";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
export default function Home() {
  // img

  const jobData = [
    "DOCUMENT CONTROLLER",
    "BRAND MANAGER",
    "DIGITAL PRODUCT DIRECTOR",
    "SALES ASSOCIATE",
    "RESOURCE MANAGER",
  ];
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [showJobs, setShowJobs] = useState(true);

  const submit = () => {
    setShowJobs(false);
    setClickedIndex(-1);
  };

  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>
      <section className="relative">
        <Image
          src="/img/hero.png"
          className="w-screen h-svh lg:h-screen object-cover object-center"
          width={1980}
          height={1080}
          alt="banner"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-black/30"></div>
        <div className="abs-center z-[5] text-white w-full flex flex-col items-center">
          <h1 className="title text-center mt-0">
            OPPORTUNITIES AT <br />
            OMNIYAT
          </h1>
          <p className="para text-center mt-6 lg:mt-12 w-full lg:w-[45%] text-pretty text-white font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ornare
            massa eget egestas purus. Convallis tellus id interdum velit
            laoreet. Nulla.
          </p>
        </div>
      </section>

      <section className="grid place-items-center mt-16 lg:mt-24 container w-11/12">
        <p className="subtitle text-center mt-4">APPLY NOW</p>
        <h1 className="font-AbhayaLibre title text-center mt-3">
          EXPLORE OPPORTUNITIES
        </h1>
      </section>

      <section className="container w-11/12 mt-14 lg:mt-28 mb-16 lg:mb-32">
        {jobData.map((item, index) => (
          <React.Fragment key={item}>
            <div
              className={cn(
                "border-b border-[#979797] w-full pt-9 pb-8",
                index === 0 || index - 1 === clickedIndex ? "border-t" : ""
              )}
            >
              <div className="w-full flex justify-between">
                <h3 className="font-optima text-lg lg:text-2xl">{item}</h3>
                <button className="btn" onClick={() => setClickedIndex(index)}>
                  APPLY NOW
                </button>
              </div>
            </div>
            {clickedIndex == index ? (
              <section className="flex justify-between w-full mt-10 mb-16 gap-20 px-10">
                <div
                  data-lenis-prevent
                  className="w-full lg:w-[50%] max-h-[550px] overflow-y-scroll pr-8"
                >
                  <h3 className="font-bold text-sm">RESPONSIBILITIES:</h3>
                  <br />
                  <ul className="para list-disc pl-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum earum odio architecto impedit magnam et aperiam
                      quas rem, modi sapiente.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum earum odio architecto impedit magnam et aperiam
                      quas rem, modi sapiente.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum earum odio architecto impedit magnam et aperiam
                      quas rem, modi sapiente.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum earum odio architecto impedit magnam et aperiam
                      quas rem, modi sapiente.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum earum odio architecto impedit magnam et aperiam
                      quas rem, modi sapiente. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Iure labore illo explicabo
                      veniam dolore minus eligendi nostrum expedita facilis
                      distinctio id pariatur laborum aperiam voluptate eveniet
                      quod ratione officia, impedit vitae. Labore nobis dolor,
                      eius ipsa hic illo et sint accusantium, rerum nemo
                      explicabo eos pariatur, totam quisquam quos quas veritatis
                      possimus ad eum non fuga laudantium neque sed. Ab autem
                      nostrum aperiam iusto, at atque, quae beatae perspiciatis
                      minima perferendis error, temporibus harum. Tempora,
                      dolor? Culpa perferendis id natus minima temporibus a.
                      Blanditiis suscipit voluptate sit natus dolorum, tempora
                      aspernatur tempore, dolore delectus perferendis expedita
                      quod illum. Sapiente neque molestias magni, dolores eius
                      libero beatae molestiae quos? Quidem inventore perferendis
                      ea autem! Hic totam, dicta quis inventore placeat
                      mollitia! Praesentium explicabo ad cumque voluptatem
                      possimus nesciunt, quo tempora aut quam ipsam! Quaerat, ea
                      dolore! Incidunt porro repellendus rem maxime tempora
                      aperiam repellat veniam illum quia, quibusdam, sint
                      exercitationem. Recusandae totam laudantium illo, placeat,
                      optio itaque, consequuntur ipsum libero obcaecati
                      reiciendis quos hic molestias iure magnam a. Repellendus
                      qui recusandae nesciunt aliquam nobis, aspernatur minima
                      autem ut magni doloribus assumenda quis facere, est
                      voluptatibus obcaecati impedit doloremque nostrum vitae
                      officia cumque quas deleniti animi fugiat? Iusto earum
                      quas optio sint!
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-[50%]">
                  <BookingForm submitClick={submit}></BookingForm>
                </div>
              </section>
            ) : null}
          </React.Fragment>
        ))}
      </section>

      {/* <section
          data-fade-up
          className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
        >
          <h1 className="font-AbhayaLibre title text-center mt-3">
            THANK FOR APPLYING
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-pretty text-black font-light">
            Thank you for your interest in a career with OMNIYAT. We have
            received your application
            <br />
            and our team will review your profile. If your profile match our
            requirements, we will reach
            <br />
            out to you soon. We appreciate your interest in our company and look
            forward to the
            <br />
            possibility of working together.
          </p>
          <button
            onClick={() => setShowJobs(true)}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              height: 60,
              width: 300,
              opacity: "50%",
              marginBottom: "15%",
            }}
            type="submit"
            className={"mt-8 lg:mt-12 bg-light-black"}
          >
            CONTINUE EXPLORING OPPORTUNIITES
          </button>
        </section> */}
    </>
  );
}
