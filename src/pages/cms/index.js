import PostJobs from "@/components/PostJobs";
import axios from "axios";
import Head from "next/head";
import React from "react";

export default function Cms() {

  const submit = (payload) => {
    console.log(payload)
    try {
      axios(`http://localhost:8080/jobPost`, {
        method: "POST",
        data: payload,
        headers: {
         'Content-Type': 'application/json'
        },
      }).then((res) => {
       alert("Data submitted successfully")
      });
    }catch (error) {
  }
};
 

  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>
                <div  style={{justifyContent:'center',alignItems:'center',marginLeft:'30%'}} className="w-full lg:w-[50%] items-center mt-[10%]">
                  <PostJobs submitClick={submit}></PostJobs>
                </div>
    </>
  );
}
