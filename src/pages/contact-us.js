import BookingForm from "@/components/BookingForm";
import Head from "next/head";
import Image from "next/image";

const ContactUs = () => {
  return (
    <main>
      <Head>
        <title>Omniyat | Contact Us</title>
      </Head>
      <section className="pt-28 lg:pt-48 flex flex-col items-center pb-10 lg:pb-28 dataFadeContainer bg-[#FAFAFA]">
        <h1 className="title text-center">Express Your Interest</h1>
        <BookingForm />
      </section>

      <section className="w-11/12 container mt-16 lg:mt-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="title">
            Schedule a consultation with Omniyat <br /> and elevate your
            Investment
          </h1>
          <p className="para ">
            The Opus by Omniyat, <br />
            PO Box 333371 <br />
            Al Alamal Street, Business Bay <br />
            Mobile: + (971) 54 991 7488 <br /> opus.concierge@clarityoam.com
          </p>
        </div>
      </section>

      <div className="mt-12 lg:mt-24">
        <Image
          src={"/img/opus-map.svg"}
          height={1980}
          width={1080}
          alt="map"
          className="w-screen h-full"
        />
      </div>
    </main>
  );
};

export default ContactUs;
