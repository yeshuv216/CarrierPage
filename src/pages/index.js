import BookingForm from "@/components/BookingForm";
import { cn } from "@/lib/utils";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  // img

  const [jobData,setJobData] = useState();
  const [allSubmittedJobData,setAllSubmittedJobData] = useState();
  const [clickedJobDetails,setClickedJobDetails] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [showJobs, setShowJobs] = useState(true);

  const submit = (payload) => {
    
    try {
      axios(`http://localhost:8080/jobs`, {
        method: "POST",
        data: payload,
        headers: {
         'Content-Type': 'multipart/form-data'
        },
      }).then((res) => {
       alert("Data submitted successfully")
      });
    }catch (error) {
      
    // setShowJobs(false);
    // setClickedIndex(-1);
  }
};

const getAllJobSubmitted = (payload) => {
    
  try {
    axios(`http://localhost:8080/jobs`, {
      method: "GET",
      data: '',
    }).then((res) => {
     console.log("Submitted job data",JSON.stringify(res))
    });
  }catch (error) {
    
  // setShowJobs(false);
  // setClickedIndex(-1);
}
};
 
  useEffect(() => {
    axios.get("http://localhost:8080/getJobPost").then((response) => {
      setJobData(response?.data?.data)
    });
    getAllJobSubmitted()
  }, []);

  const getClickedJobPostDetails=(index)=>{
    setClickedIndex(index)
    setClickedJobDetails(jobData[index])
  }

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
        {jobData&&jobData.map((item, index) => (
          <React.Fragment key={item}>
            <div
              className={cn(
                "border-b border-[#979797] w-full pt-9 pb-8",
                index === 0 || index - 1 === clickedIndex ? "border-t" : ""
              )}
            >
              <div className="w-full flex justify-between">
                <h3 className="font-optima text-lg lg:text-2xl">{item?.name}</h3>
                <button className="btn" onClick={() => getClickedJobPostDetails(index)}>
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
                      {item?.description1}
                    </li>
                    <li>
                    {item?.description2}
                    </li>
                    <li>
                    {item?.description3}
                    </li>
                   
                  </ul>
                </div>
                <div className="w-full lg:w-[50%]">
                  <BookingForm jobDetails={clickedJobDetails}  submitClick={submit}></BookingForm>
                </div>
              </section>
            ) : null}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
