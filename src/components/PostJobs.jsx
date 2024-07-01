import { useState } from "react";

const PostJobs = ({ submitClick }) => {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [expInUae, setExpInUae] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      description1: description,
      description2: description2,
      description3: description3,
      expInUae: expInUae,
      totalExperience: totalExp,
      noticePeriod: noticePeriod,
    };
    console.log(payload);
    submitClick(payload);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-36">
      <div>
        <p className="text-sm">Responsibilities</p>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="inputItemMultiline mt-4 w-[400px] h-[400px]"
          placeholder="Description 1"
        />
      </div>
      <div className={"w-full flex flex-col gap-3 lg:gap-3.5"}>
        <p className="text-sm">Job Title</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Job Title"
        />
        <p className="text-sm">Total Years of Experience</p>

        <input
          value={totalExp}
          onChange={(e) => setTotalExp(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Total Years of Experience"
        />
        <p className="text-sm">Total Years of Experience in UAE</p>
        <input
          value={expInUae}
          onChange={(e) => setExpInUae(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Total Years of Experience in UAE"
        />
        <p className="text-sm">Notice Period</p>
        <input
          value={noticePeriod}
          onChange={(e) => setNoticePeriod(e.target.value)}
          type="text"
          className="inputItem"
          placeholder="Notice Period"
        />

        <button
          style={{ marginBottom: "10%" }}
          onClick={(e) => handleOnSubmit(e)}
          className="text-sm w-fit text-left text-white bg-black/40 uppercase py-2 px-14"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostJobs;
