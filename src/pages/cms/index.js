import PostJobs from "@/components/PostJobs";
import axios from "axios";
import Head from "next/head";
import React from "react";

export default function Cms() {
  const submit = (payload) => {
    console.log(payload);
    try {
      axios(`http://localhost:3001/jobPost`, {
        method: "POST",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        alert("Data submitted successfully");
      });
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>
      <div className="container w-11/12 mt-32 mb-20">
        <PostJobs submitClick={submit}></PostJobs>
      </div>
    </>
  );
}
