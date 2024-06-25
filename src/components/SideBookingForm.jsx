import { cn } from "@/lib/utils";
import { BookingFormContext } from "@/providers/BookingFormProvider";
import React, { useContext } from "react";
import XMarkIcon from "./icons/XMarkIcon";
import BookingForm from "./BookingForm";

const SideBookingForm = () => {
  const { isFormOpen, setIsFromOpen } = useContext(BookingFormContext);

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-screen bg-white w-screen lg:w-[40vw] z-50 transition-all duration-[1000ms] ease-in-out shadow-2xl",
        isFormOpen ? "right-0" : "-right-full"
      )}
    >
      <XMarkIcon
        onClick={() => setIsFromOpen(false)}
        className="size-6 absolute left-4 lg:right-5 lg:left-auto top-4 lg:top-5 cursor-pointer"
      />
      <div className="flex flex-col items-center w-full mt-12 px-5 lg:px-12">
        <h1 className="uppercase text-xl lg:text-3xl font-optima font-medium lg:font-normal">
          EXPRESS YOUR INTEREST
        </h1>
        <BookingForm isSideForm={true} />
      </div>
    </div>
  );
};

export default SideBookingForm;
