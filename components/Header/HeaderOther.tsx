import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const HeaderOther = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const usePathName = usePathname();

  return (
    <header
      className={classNames(
        "header left-0 top-0 z-40 flex w-full items-center border-b-2 border-gray-100",
        {
          "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition":
            sticky,
          "absolute bg-transparent": !sticky,
>>>>>>> b361d4b (I worked on the Property Listing Card)
        }
      )}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link href="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
              <Image
                src="/images/logo/primereservedlogo.png"
                alt="logo"
                width={140}
                height={30}
                className="w-full"
              />
              <Image
                src="/images/logo/primereservedlogo.png"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={classNames(
                    "relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300",
                    { "top-[7px] rotate-45": navbarOpen, "opacity-0": navbarOpen }
                  )}
                />
                <span className="relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300" />
                <span
                  className={classNames(
                    "relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300",
                    { "top-[-8px] -rotate-45": navbarOpen }
                  )}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={classNames(
<<<<<<< HEAD
                  "navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100",
=======
                  "navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100",
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  {
                    "visibility top-full opacity-100": navbarOpen,
                    "invisible top-[120%] opacity-0": !navbarOpen,
                  }
                )}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-4 text-base lg:mr-0 lg:inline-flex lg:px-1 lg:py-8 ${
                            usePathName === menuItem.path
<<<<<<< HEAD
                              ? "text-primary "
                              : "text-primary"
=======
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
<<<<<<< HEAD
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary /70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
=======
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={classNames(
                              "submenu? relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full",
                              { block: openIndex === index, hidden: openIndex !== index }
                            )}
                          >
                            {menuItem.submenu?.map((submenuItem, subIndex) =>
                              submenuItem.path ? (
                                <Link
                                  href={submenuItem.path}
                                  key={subIndex}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ) : null
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex lg:hidden">
                  <IconButton text="Contact Us" icon={<BtnArrowIcon />} />
                </div>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-4 pr-16 lg:pr-0">
              <div className="my-2 hidden lg:flex">
                <IconButton text="Contact Us" icon={<BtnArrowIcon />} />
              </div>
<<<<<<< HEAD
=======
              {/* <div>
                <ThemeToggler />
              </div> */}
>>>>>>> b361d4b (I worked on the Property Listing Card)
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOther;