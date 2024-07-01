import { useCallback, useEffect, useRef, useState } from "react";

const PostJobs = ({ submitClick }) => {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [expInUae, setExpInUae] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");

  const ref = useRef();
  const [isMounted, setIsMounted] = useState(false);

  const initialzeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const List = (await import("@editorjs/list")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Enter Job Description",
        inlineToolbar: true,
        data: { blocks: description },
        tools: {
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") setIsMounted(true);
  }, []);

  useEffect(() => {
    const init = async () => {
      await initialzeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initialzeEditor]);

  if (!isMounted) return null;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const desc = await ref.current.save();

    const payload = {
      name: name,
      description1: desc,
      expInUae: expInUae,
      totalExperience: totalExp,
      noticePeriod: noticePeriod,
    };
    console.log(payload);
    submitClick(payload);
  };

  // const blocks = await ref?.current?.save();

  return (
    <div className="flex flex-col lg:flex-row gap-x-36">
      <div className="w-full lg:w-[80%]">
        <p className="text-sm">Responsibilities</p>
        <div
          data-lenis-prevent
          id="editor"
          className="h-[450px] overflow-scroll inputItem w-full mt-6"
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
