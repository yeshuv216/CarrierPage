
import {  useState } from "react";

const PostJobs = ({ submitClick }) => {
 
   const [name,setName]=useState('')
   const [description,setdescription]=useState('')
   const [description2,setdescription2]=useState('')
   const [description3,setdescription3]=useState('')
   const [totalExp,setTotalExp]=useState('')
   const [expInUae,setExpInUae]=useState('')
   const [noticePeriod,setNoticePeriod]=useState('')

  const handleOnSubmit = async (e) => {
    e.preventDefault();
   
    const payload = {'name':name,'description1':description,'description2':description2,'description3':description3,'expInUae':expInUae,
      'totalExperience':totalExp,'noticePeriod':noticePeriod}
    console.log(payload)
    submitClick(payload)
  };
 

  return (
    <form
      className={"w-full flex flex-col gap-3 lg:gap-3.5 mt-6 lg:mt-10"}
    >
      <>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"   className="inputItem" placeholder="Name" />
        <input value={description} onChange={(e)=>setdescription(e.target.value)} type="text" className="inputItem" placeholder="Description 1" />
        <input value={description2} onChange={(e)=>setdescription2(e.target.value)} type="text" className="inputItem" placeholder="Description 2" />
        <input
          value={description3} onChange={(e)=>setdescription3(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Description 3"
        />
         <input
          value={totalExp} onChange={(e)=>setTotalExp(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Total Years of Experience"
        />
        <input
          value={expInUae} onChange={(e)=>setExpInUae(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Total Years of Experience in UAE"
        />
          <input
          value={noticePeriod} onChange={(e)=>setNoticePeriod(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Notice Period"
        />
        <button
          style={{marginBottom:'10%'}}
          onClick={(e)=>handleOnSubmit(e)}
          className="text-sm w-full text-left bg-black/40 uppercase py-2 pl-14"
          type="submit"
        >
          Submit
        </button>
      </>
    </form>
  );
};

export default PostJobs;
