
import axios from "axios";
import Head from "next/head";
import React, { useState,useEffect } from "react";
import { cn } from "@/lib/utils";
export default function Cms() {
    const [jobData,setJobData] = useState();
    const [clickedIndex, setClickedIndex] = useState(-1);
    useEffect(() => {
        axios.get("http://localhost:8080/getJobPost").then((response) => {
          setJobData(response?.data?.data)
        });
      }, []);
 

  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>
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
                <button className="btn" onClick={() => setClickedIndex(index)}>
                 See Applied List
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
              </section>
            ) : null}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
