import { cn } from "@/lib/utils";
import { BookingFormContext } from "@/providers/BookingFormProvider";
import parsePhoneNumber from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CheveronDownIcon from "./icons/CheveronDownIcon";

const BookingForm = ({ isSideForm = false,submitClick }) => {
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
      className={cn(
        "flex flex-col ",
        isSideForm
          ? "w-full gap-2 lg:gap-2 mt-6 lg:mt-10"
          : "w-11/12 lg:w-[27%] gap-4 lg:gap-8 mt-12"
      )}
    >
      
      <div className="">
        <input style={{height:30,marginTop:10,borderColor:'#000',borderWidth:1,padding:5,width:500}} placeholder="Name"></input>
        <input style={{height:30,marginTop:10,borderColor:'#000',borderWidth:1,padding:5,width:500}} placeholder="Phone no."></input>
        <input style={{height:30,marginTop:10,borderColor:'#000',borderWidth:1,padding:5,width:500}} placeholder="Email ID"></input>
        <input style={{height:30,marginTop:10,borderColor:'#000',borderWidth:1,padding:5,width:500}} placeholder="Years of Experience"></input>
        <input style={{height:30,marginTop:10,borderColor:'#000',borderWidth:1,padding:5,width:500}} placeholder="Upload Resume*"></input>
        <button
          onClick={submitClick}
          style={{width:500}}
          type="submit"
          className={cn("cta", isSideForm ? "mt-4 lg:mt-6" : "mt-8 lg:mt-12")}
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
