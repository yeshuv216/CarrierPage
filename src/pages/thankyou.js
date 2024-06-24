import Head from "next/head";
import Link from "next/link";

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>Omniyat | Thank you</title>
      </Head>
      <div className="h-[100vh] w-[100vw] bg-[url('/img/asset5.webp')] bg-cover bg-no-repeat bg-right lg:bg-center relative font-adobeGaramondPro">
        <div className="h-full w-full text-center pt-5 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-[25px]">
          <h1 className="drop-shadow-2xl uppercase">Thank You</h1>
          <h1 className="w-[90%] lg:w-[50%] drop-shadow-md text-sm lg:text-lg text-pretty">
            We have received your details and one of our specialists will get in
            touch with you shortly.
          </h1>
          <Link
            href="/"
            className="text-base uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-white text-black w-[140px] mt-10 flex items-center justify-center"
          >
            back to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
