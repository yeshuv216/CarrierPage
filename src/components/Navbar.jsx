import useWindowScroll from "@/hooks/useWindowScroll";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  HamburgerIcon,
  OmniyatLogo,
  OmniyatMonogramLogo,
  XMarkIcon,
} from "./Icons";

const Navbar = () => {
  const windowScroll = useWindowScroll();
  const [scroll, setScroll] = useState(windowScroll.y);
  const [animate, setAnimate] = useState(false);
  const [sticked, setSticked] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  const navbarRef = useRef(null);
  const sidebarWrapper = useRef(null);
  const linkWrapper = useRef(null);
  const router = useRouter();

  const navigate = (url) => {
    closeSidebar();
    router.push(url);
  };

  useEffect(() => {
    var navHeight = navbarRef.current?.offsetHeight || 0;

    const scrolled = windowScroll.y;

    if (scrolled > window.innerHeight * 2) {
      setScrolledPast(true);
    } else {
      setScrolledPast(false);
    }

    if (scrolled > navHeight) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }

    if (scrolled > scroll) {
      setSticked(false);
    } else {
      setSticked(true);
    }

    setScroll(scrolled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowScroll.y]);

  const { contextSafe } = useGSAP({ scope: sidebarWrapper });

  const openSidebar = contextSafe(() => {
    const links = Array.from(linkWrapper?.current.children)
      .map((item) => item)
      .reverse();

    gsap.to(sidebarWrapper.current, {
      left: 0,
      duration: 1,
      ease: "power1.out",
    });
    gsap.fromTo(
      links,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
        ease: "power1.out",
      }
    );
  });

  const closeSidebar = contextSafe(() => {
    const links = Array.from(linkWrapper?.current.children).map((item) => item);
    gsap.to(sidebarWrapper.current, {
      left: "-100%",
      duration: 1,
      delay: 0.4,
      ease: "power1.in",
    });
    gsap.fromTo(
      links,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: "-100%",
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power1.in",
      }
    );
  });

  const fullLogo = useRef(null);
  const monoGramLogo = useRef(null);
  const debounceTimer = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const runAnimation = (isSticked) => {
          if (isSticked) {
            const tl = gsap.timeline();
            tl.to(monoGramLogo.current, {
              opacity: 0,
              duration: 0.3,
            });
            tl.to(fullLogo.current, {
              opacity: 1,
              duration: 0.3,
            });
          } else {
            const tl = gsap.timeline();
            tl.to(fullLogo.current, {
              opacity: 0,
              duration: 0.3,
            });
            tl.to(monoGramLogo.current, {
              opacity: 1,
              duration: 0.3,
            });
          }
        };

        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
          runAnimation(sticked);
        }, 200);

        return () => {
          if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
          }
        };
      });

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [sticked] }
  );

  return (
    <React.Fragment>
      <nav
        ref={navbarRef}
        className={cn(
          "flex items-center justify-center lg:h-auto w-full top-0 fixed left-0 z-[20] bg-black/20 backdrop-blur-[16px]"
        )}
      >
        <div className="container h-[60px] w-11/12 flex items-center justify-between gap-[350px] text-white tracking-wider text-sm relative">
          <HamburgerIcon
            className=" size-6 cursor-pointer"
            onClick={() => openSidebar()}
          />

          <Link href="/" aria-label="home" className="abs-center">
            <div
              ref={fullLogo}
              className="h-[20px] lg:h-[20px] abs-center opacity-1"
            >
              <OmniyatLogo className="w-auto h-full" />
            </div>

            <div
              ref={monoGramLogo}
              className="h-[25px] lg:h-[35px] abs-center opacity-0"
            >
              <OmniyatMonogramLogo className="w-auto h-full" />
            </div>
          </Link>

          <button className="font-optima px-4 py-2.5 bg-black/35">
            Contact Us
          </button>
        </div>
      </nav>
      <div
        ref={sidebarWrapper}
        className={cn(
          "fixed top-0 h-screen -left-full w-screen lg:w-[45vw] bg-black/40 z-[50] backdrop-blur-lg text-white ease-in-out"
        )}
      >
        <XMarkIcon
          className="size-6 absolute left-[5%] lg:left-[20%] top-4 lg:top-6 cursor-pointer"
          onClick={() => closeSidebar()}
        />
        <div className="flex flex-col justify-center items-end h-full uppercase">
          <div className="w-[85%] lg:w-[80%] relative">
            <div
              className="text-2xl lg:text-2xl flex flex-col gap-6 lg:gap-8 *:cursor-pointer font-abcOracle"
              ref={linkWrapper}
            >
              <p
                onClick={() => navigate("/")}
                className={cn(
                  router.pathname === "/"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                HOME
              </p>
              <p
                onClick={() => navigate("/services")}
                className={cn(
                  router.pathname === "/services"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                SERVICES
              </p>
              <p
                onClick={() => navigate("/masterpieces")}
                className={cn(
                  router.pathname === "/masterpieces"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Masterpieces
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
