"use client";
import Balancer from "react-wrap-balancer";
import TabPlan from "./Tabs/tabplan";
import { FeatureTable } from "./Features/featureTable";
import { Button } from "~/components/ui/button";
import { useState } from "react";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className="z-20 m-2 mx-auto flex min-h-screen max-w-[85%] flex-col items-center justify-start space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mb-2 flex flex-col items-center gap-5 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>Save 10x time & effort with us</Balancer>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Pay only for upload minutes. Download unlimited videos.
          </Balancer>
        </p>
      </div>
      <TabPlan />
      <div className="flex w-full flex-col items-center gap-8 pt-4">
        <Button
          variant={"outline"}
          className=" bg-[#F5F7F2] hover:bg-[#FAFAF8]"
          onClick={() => toggleIsOpen()}
        >
          View all features{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Button>
        <div
          className={`w-full transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {isOpen && <FeatureTable />}
        </div>
      </div>
    </div>
  );
};

export default Landing;
