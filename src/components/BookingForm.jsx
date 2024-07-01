import { BookingFormContext } from "@/providers/BookingFormProvider";
import parsePhoneNumber from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const BookingForm = ({ isSideForm = false, submitClick,jobDetails }) => {
 
   const [name,setName]=useState('')
   const [emailId,setEmailId]=useState('')
   const [phone,setPhone]=useState('')
   const [currentEmployer,setCurrentEmployer]=useState('')
   const [industryExp,setIndustryExp]=useState('')
   const [totalExp,setTotalExp]=useState('')
   const [currentTitle,setCurrentTitle]=useState('')
   const [expInUae,setExpInUae]=useState('')
   const [noticePeriod,setNoticePeriod]=useState('')
   const [fileName,setFileName]=useState('')
   const [resume,setResume]=useState()
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsFromOpen } = useContext(BookingFormContext);

  const isPhoneValid = (phone) => {
    try {
      return parsePhoneNumber(phone)?.isValid();
    } catch (error) {
      return false;
    }
  };

 
  var indudstryExpData = [
    { label: "Banking", value: "Banking"}, {label: "Construction", value: "Construction"},{label: "Engineering", value: "Engineering"},{label: "Energy", value: "Energy"}
      ,{label: "Entertainment", value: "Entertainment"},{label: "F&B", value: "F&B"},{label: "Financial Services", value: "Financial Services"},{label: "FMCG", value: "FMCG"},{label: "Hospitality", value: "Hospitality"},
      {label: "Insurance", value: "Insurance"},{label: "Investment", value: "Investment"},{label: "Logistics", value: "Logistics"},{label: "Manufacturing", value: "Manufacturing"},
      {label: "Oil and Gas",value: "Oil and Gas"},{label: "Professional Services",value: "Professional Services"},{label: "Real Estate",value: "Real Estate"},{label: "Retail", value: "Retail"},
      {label: "Technology",value: "Technology"},{label: "Telecom",value: "Telecom"},{label: "Transportation",value: "Transportation"},{label: "Travel & Tourism",value: "Travel & Tourism"},{label: "Others",value: "Others"}
  ];
  var totalYearsData = [
    { label: "<1", value: "0"}, {label: "2-5", value: "2-5" }, {label: "6-10", value: "6-10" }, {label: "10-15", value: "10-15" },
    , {label: "15+", value: "15" }
  ];

  var totalYearsUaeData = [
    { label: "<1", value: "0"}, {label: "2-5", value: "2-5" }, {label: "6-10", value: "6-10" }, {label: "10-15", value: "10-15" },
    , {label: "15+", value: "15" }
  ];

  var noticePeriodData = [
    { label: "<1", value: "0"}, {label: "2", value: "2" }, {label: "3", value: "3" }, {label: "3+", value: "4" }
  ];

  function getSecondPart(str) {
    return str.split('-')[1];
} 

function getFirstPart(str) {
  return str.split('-')[0];
} 

  const handleOnSubmit = async (e) => {
    let validation=true;
    e.preventDefault();
   if(getFirstPart(totalExp)>jobDetails?.totalExperience||getSecondPart(totalExp)<jobDetails?.totalExperience)
    {
      validation=false;
    }
    if(getFirstPart(expInUae)>jobDetails?.experienceUae||getSecondPart(expInUae)<jobDetails?.experienceUae)
    {
        validation=false;
    }
    if(getFirstPart(noticePeriod)>jobDetails?.noticePeriod||getSecondPart(noticePeriod)<jobDetails?.noticePeriod)
     {
          validation=false;
     }
   
    const payload = new FormData();
    payload.append('name', name);
    payload.append('emailId', emailId);
    payload.append('phoneNo', phone);
    payload.append('currentEmployer', currentEmployer);
    payload.append('industryExperience', industryExp);
    payload.append('title', currentTitle);
    payload.append('expInUae', expInUae);
    payload.append('totalExperience', totalExp);
    payload.append('noticePeriod', noticePeriod);
    payload.append('resume', resume);
    payload.append('filename', fileName);
    payload.append('validation', validation);

    submitClick(payload)
  };

  const onSelectResume = (event) => {
    if (event.target.files && event.target.files[0]) {
      setResume(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
   }


  return (
    <form
      className={"w-full flex flex-col gap-3 lg:gap-3.5 mt-6 lg:mt-10"}
    >
      <>
      
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"   className="inputItem" placeholder="Name" />
        <input value={emailId} onChange={(e)=>setEmailId(e.target.value)} type="text" className="inputItem" placeholder="Email ID" />
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className="inputItem" placeholder="Phone no." />
        <input
          value={currentEmployer} onChange={(e)=>setCurrentEmployer(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Current Employer"
        />
        <select className="inputItem" value={industryExp}  onChange={(e)=>{setIndustryExp(e.target.value)}} placeholder="Industry Experience">
          <option value="">Industry Experience</option>
          {indudstryExpData.map((item, index) => 
           {
            return (
            <option value={item?.value} key={index}>{item?.label}</option>
          )})}
        </select>
        <input value={currentTitle} onChange={(e)=>setCurrentTitle(e.target.value)} type="text" className="inputItem" placeholder="Current Title" />
        <select
          value={totalExp}  onChange={(e)=>{setTotalExp(e.target.value)}}
          className="inputItem"
          placeholder="Total Years of Experience"
        >
          <option value="">Total Years of
          Experience</option>
          {totalYearsData.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        <select
          value={expInUae}  onChange={(e)=>{setExpInUae(e.target.value)}}
          className="inputItem"
          placeholder="Total Years of Experience in UAE"
        >
          <option value="">Years of Experience in UAE</option>
          {totalYearsUaeData.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        
        <select value={noticePeriod}  onChange={(e)=>{setNoticePeriod(e.target.value)}} className="inputItem" placeholder="Notice Period">
          <option value="">Notice Period</option>
          {noticePeriodData.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        <p className="text-xs mt-2.5 font-light">
          Resume * [ File types : .pdf, .docx, .doc | File size : up to 5 MB ]
        </p>
        <input type="file" className="inputItem" placeholder="Upload Resume*" onChange={onSelectResume}/>
        <button
          onClick={(e)=>handleOnSubmit(e)}
          className="btn w-fit ml-auto"
    
          type="submit"
        >
          Submit
        </button>
      </>
    </form>
  );
};

export default BookingForm;
