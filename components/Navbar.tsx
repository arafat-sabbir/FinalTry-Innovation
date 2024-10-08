"use client";
import { useState } from "react";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { CircleAlert, House, Moon, Package, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-white border-b text-black w-full relative dark:bg-gray-900 dark:text-white ">
      <Container>
        <div className="h-20 items-center px-5  lg:px-0 flex justify-between">
          <Link href={"/"} className=" flex items-center lg:text-2xl font-medium tracking-wider">
            <Image
              className="text-xl font-semibold"
              src={"/companyLogo.svg"}
              width={160}
              height={160}
              alt="Finaltry Innovations Logo"
            />
          </Link>

          <ul className="lg:flex hidden gap-6">
            <a
              className={
                pathName === "/" ? "text-primary font-bold  rounded-full" : ""
              }
            >
              Home
            </a>
            <a href="#aboutUs" className="hover:text-primary  cursor-pointer transition-all duration-300">
              About Us
            </a>
            <a
              href="#ourProjects"
              className="hover:text-primary  cursor-pointer transition-all duration-300"
            >
              Our Projects
            </a>
          </ul>
          <div className="flex md:gap-6 gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-white scale-100 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a href="#contact" className="lg:block hidden dark:text-white">
              <Button >Contact Us</Button>
            </a>
          </div>
          <div className="lg:hidden block ">
            {!open && (
              <svg
                onClick={toggleNavbar}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`lg:hidden  z-50 top-0 right-0 bg-white border-l h-[100vh] fixed overflow-hidden transition-all duration-300 dark:bg-gray-900`}
          style={{ maxWidth: open ? "15rem" : "0", width: "100%" }}
        >
          <div className="flex justify-between w-full p-4 pt-6">
          <Link href={"/"} className=" flex items-center lg:text-2xl font-medium tracking-wider">
            <Image
              className="text-xl font-semibold"
              src={"/companyLogo.svg"}
              width={120}
              height={120}
              alt="Finaltry Innovations Logo"
            />
          </Link>
            <svg
              onClick={toggleNavbar}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="w-full p-4">
            <a className="flex gap-2  p-2">
              <House /> Home
            </a>
            <a href="#contact" className="flex gap-2  p-2">
              <CircleAlert /> Contact Us
            </a>
            <a href="#ourProjects" className="flex gap-2  p-2">
              <Package /> Our Projects
            </a>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
