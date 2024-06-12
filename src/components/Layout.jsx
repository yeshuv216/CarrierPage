import { BookingFormProvider } from "@/providers/BookingFormProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Head from "next/head";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBookingForm from "./SideBookingForm";
import StickyFooter from "./StickyFooter";

const Layout = ({ children }) => {
  const router = useRouter();

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    const fadeUps = document?.querySelectorAll("[data-fade-up]");

    if (fadeUps) {
      Array.from(fadeUps).forEach((item) => {
        gsap.from(item, {
          duration: 1,
          opacity: 0,
          transform: "translate3d(0,100px,0)",
          ease: CustomEase.create("custom", "M0,0 C0.25,0.1 0.25,1 1,1 "),
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause resume reset",
          },
        });
      });
    }
  }, [router.pathname]);

  return (
    <>
      <BookingFormProvider>
        <Head>
          <link rel="icon" type="image/x-icon" href="/logo.svg" />
          <meta
            name="description"
            content="LIV Reside is a dedicated luxury property management service company
          for short-term rentals of OMNIYAT residences, established under the
          auspices of OMNIYAT LIV Property Management."
          />
          <meta property="og:title" content="Liv Reside" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="/logo.svg" />
          <meta
            name="twitter:card"
            content="LIV Reside is a dedicated luxury property management service company
          for short-term rentals of OMNIYAT residences, established under the
          auspices of OMNIYAT LIV Property Management."
          ></meta>
          <meta
            property="og:description"
            content="LIV Reside is a dedicated luxury property management service company
          for short-term rentals of OMNIYAT residences, established under the
          auspices of OMNIYAT LIV Property Management."
          ></meta>
          <meta property="og:site_name" content="Liv Reside" />
          <meta name="twitter:image:alt" content="Liv Reside"></meta>
        </Head>
        {router.pathname !== "/thankyou" ? (
          <>
            <Navbar />
            <SideBookingForm />
          </>
        ) : null}
        <>{children}</>
        {router.pathname !== "/thankyou" ? (
          <>
            <StickyFooter />
            <Footer />
          </>
        ) : null}
      </BookingFormProvider>
    </>
  );
};

export default Layout;