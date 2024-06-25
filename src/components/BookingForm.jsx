import { BookingFormContext } from "@/providers/BookingFormProvider";
import parsePhoneNumber from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const BookingForm = ({ isSideForm = false, submitClick }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    buildingName: "",
    propertyType: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsFromOpen } = useContext(BookingFormContext);

  const phoneInput = usePhoneInput({
    defaultCountry: "ae",
    onChange: (data) => {
      setFormValues({ ...formValues, countryCode: data.phone.trim() });
    },
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const isPhoneValid = (phone) => {
    try {
      return parsePhoneNumber(phone)?.isValid();
    } catch (error) {
      return false;
    }
  };

  var today_date = new Date();
  var utm_source = searchParams.get("utm_source");
  var utm_medium = searchParams.get("utm_medium");
  var utm_campaign = searchParams.get("utm_campaign");
  var utm_content = searchParams.get("utm_content");
  var utm_term = searchParams.get("utm_term");
  var utm_adgroup = searchParams.get("utm_adgroup");
  var gclid = searchParams.get("gclid");
  var msclkid = searchParams.get("msclkid");
  var fbclid = searchParams.get("fbclid");
  var li_fat_id = searchParams.get("li_fat_id");
  var twclid = searchParams.get("twclid");
  var gad = searchParams.get("gad");
  var options = [
    { label: "Banking", value: "", label: "Construction", value: "" },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      buildingName,
      propertyType,
    } = formValues;

    if (!parsePhoneNumber(`${countryCode?.trim() + phone}`)?.isValid()) {
      console.log(countryCode.trim() + phone);
      alert("Enter a valid phone number!");
      return;
    }

    var apiUrl = `?Created Date=${today_date}&First Name=${firstName}&Last Name=${lastName}&Email=${email}&Country Code=${countryCode}&Phone Number=${phone}&Building Name=${buildingName}&Property Type=${propertyType}&UTM Source=${utm_source}&UTM Medium=${utm_medium}&UTM Campaign=${utm_campaign}&UTM content=${utm_content}&UTM Term=${utm_term}&UTM Adgroup=${utm_adgroup}&gclid=${gclid}&msclkid=${msclkid}&fbclid=${fbclid}&li_fat_id=${li_fat_id}&twclid=${twclid}&gad=${gad}`;

    try {
      fetch(`https://hooks.zapier.com/hooks/catch/8540544/30al7qm/${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        if (res.status === 200) {
          setIsFromOpen(false);
          console.log("form sent");
          router.push("/thankyou");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={"w-full flex flex-col gap-3 lg:gap-3.5 mt-6 lg:mt-10"}
    >
      <>
        <input type="text" className="inputItem" placeholder="Name" />
        <input type="text" className="inputItem" placeholder="Email ID" />
        <input type="text" className="inputItem" placeholder="Phone no." />
        <input
          type="text"
          className="inputItem"
          placeholder="Current Employer"
        />
        <select className="inputItem" placeholder="Industry Experience">
          <option value="">Industry Experience</option>
          {options.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        <input type="text" className="inputItem" placeholder="Current Title" />
        <select
          className="inputItem"
          placeholder="Total Years of
Experience"
        >
          <option value="">Years of Experience</option>
          {options.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        <select className="inputItem" placeholder="Notice Period">
          <option value="">Notice Period</option>
          {options.map((item, index) => (
            <option key={index}>{item?.label}</option>
          ))}
        </select>
        <p className="text-xs mt-2.5 font-light">
          Resume * [ File types : .pdf, .docx, .doc | File size : up to 5 MB ]
        </p>
        <input type="file" className="inputItem" placeholder="Upload Resume*" />
        <button
          onClick={submitClick}
          className="text-sm w-full text-left bg-black/40 uppercase py-2 pl-14"
          type="submit"
        >
          Submit
        </button>
      </>
    </form>
  );
};

export default BookingForm;
