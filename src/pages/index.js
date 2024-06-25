
import Head from "next/head";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";
export default function Home() {
  // img

  const jobData=["DOCUMENT CONTROLLER","BRAND MANAGER","DIGITAL PRODUCT DIRECTOR","SALES ASSOCIATE","RESOURCE MANAGER"]
  const [clickedIndex,setClickedIndex]=useState(-1)
  const [showJobs,setShowJobs]=useState(true)

  const submit=()=>{
    setShowJobs(false)
    setClickedIndex(-1)
  }
  return (
    <>
      <Head>
        <title>Omniyat</title>
      </Head>
      {showJobs?(
        <div>
      <section  className="relative">
      <Image src={require('../../public/img/hero.png')} className="h-[100vh] w=[100vh]"></Image>
         <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="font-AbhayaLibre title text-center mt-0">
          OPPORTUNITIES AT <br />OMNIYAT
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-pretty text-white font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <br />
          Ornare massa eget egestas purus. Convallis tellus id interdum velit laoreet. Nulla.
        </p>
        </div>
      
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
         <p style={{color:"#BB9C65"}} className="font-Poppins text-yellow-300 para text-center mt-4 w-full lg:w-[60%] text-pretty">
         APPLY NOW
        </p>
        <h1 className="font-AbhayaLibre title text-center mt-3">EXPLORE OPPORTUNITIES</h1>
      </section>

      {jobData.map((item,index)=>(
        <section
        key={index}
        className="items-center m-5  mb-2 scontainer w-12/12"
      >
        <div  style={{backgroundColor:"#979797",height:1}}></div>
        <section
        className="horizontal items-center mt-5 lg:mt-5 container w-11/12"
      >
         <p className="font-Poppins text-black ml-[5%] mt-2 w-full lg:w-[20%] text-pretty">
         {item}
        </p>
        <section
        className="grid items-right ml-[60%] lg:mt-2 container w-1/12"
      >
        <button className="font-ABeeZee text-sm" style={{height:30,width:150,backgroundColor:'#000',opacity:'50%',color:'white'}} onClick={()=>setClickedIndex(index)} radius="none">
        APPLY NOW
      </button> 
      </section>
      </section>
      {clickedIndex==index?(
      <section className="h-[70vh] scroll space-between horizontal">
<div className="font-Poppins items-center text-black-40 ml-[8.5%] scroll-auto h-[1vh]">
<div style={{fontWeight:'bold'}} className="font-Poppins  text-black-bold mt-5">
RESPONSIBILITIES:
</div>
<br/>
<div className="font-Poppins h-[1vh] text-black-bold mt-5 scroll-auto" style={{color:'grey',width:500}}>
. Delivering projects on time to budget & Coordination considering objectives and requirements.
<br/>
. Produce and control of designs in compliance with regulatory By-Laws and Design guidelines.
<br/>
. Knowledge of Local and International Building Codes for Compliance and Design approvals
<br/>
. Knowledge of IBC, NFPA, DBC, FLSC Codes and applications in Design development process
<br/>
. Familiar with DM, Green Building, DDA, JAFZA, TECOM and other Regulations under AHJ
<br/>
. Assist in follow-up design Information, NOCs from DEWA, DCD, DCAA and others applicable Revit Architecture to LOD 300, documentation, data extracts, clash detections & Project delivery.
</div>
</div>
<div className="ml-[15%]">
<BookingForm submitClick={submit}></BookingForm>
</div>
</section>
):null}
</section>
      ))}
      
      </div>
      ):
      <section
      data-fade-up
      className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
    >
      <h1 className="font-AbhayaLibre title text-center mt-3">THANK FOR APPLYING</h1>
      <p className="para text-center mt-4 w-full lg:w-[100%] text-pretty text-black font-light">
      Thank you for your interest in a career with OMNIYAT. We have received your application 
          <br />
          and our team will review your profile. If your profile match our requirements, we will reach
          <br />
          out to you soon. We appreciate your interest in our company and look forward to the
          <br />
          possibility of working together.
        </p>
        <button
          onClick={()=>setShowJobs(true)}
          style={{backgroundColor:"#000",color:"#fff",height:60,width:300,opacity:"50%",marginBottom:"15%"}}
          type="submit"
          className={"mt-8 lg:mt-12 bg-light-black"}
        >
          CONTINUE EXPLORING OPPORTUNIITES 
        </button>
    </section>
      }
    </>
  );
}
