"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import data from "./CardData";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import Balancer from "react-wrap-balancer";
import { useState } from "react";

const PlanCards = ({ duration }: { duration: PlanDuration }) => {
  const planCost = null;
  const [value, setValue] = useState([125]);
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex items-center justify-between gap-8">
        <p className="text-xl">
          <Balancer>
            Suggesting an ideal plan for producing around
            <span className="font-semibold text-[#943DEC]">
              &nbsp;{value}&nbsp;
            </span>
            clips monthly
          </Balancer>
        </p>
        <div className="flex w-full items-center justify-end gap-4">
          <span className="text-xs text-[#61615B]">50</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Slider
                  max={200}
                  defaultValue={value}
                  step={1}
                  onValueChange={setValue}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{value} clips</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="text-xs text-[#61615B]">200+</span>
        </div>
      </div>
      <div className="">
        {duration === PlanDuration.Monthly ? (
          <div className="mx-auto grid max-w-sm grid-cols-1 items-start gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {Object.keys(data.monthly)
              // .slice(0, 3)
              .map((plan, index) => (
                <div key={index}>
                  <Card
                    className={
                      plan === "growth"
                        ? "bg-[#252521] text-[#F6F6F2]"
                        : "bg-white"
                    }
                  >
                    <CardHeader>
                      <CardTitle
                        className={`flex items-center gap-2 text-base font-medium tracking-[0.1px]`}
                      >
                        {data.monthly[plan]?.title}
                        {plan === "growth" && (
                          <Badge
                            variant={"accent"}
                            className="rounded-md text-xs"
                          >
                            Recommended
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex items-baseline gap-1">
                        <CardTitle className="pt-2 text-4xl font-bold">
                          USD&nbsp;
                          {plan !== "custom"
                            ? data.monthly[plan]?.cost
                            : planCost}
                        </CardTitle>
                        <CardDescription>/month</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-4">
                      {plan === "free" ? (
                        <Button variant={"default"} className="w-full" disabled>
                          Start for free
                        </Button>
                      ) : (
                        <Button
                          variant={plan === "growth" ? "default" : "outline"}
                          className={`w-full ${plan === "growth" ? "bg-[#943DEC] text-[#F6F6F2]" : "text-zinc-950"}`}
                        >
                          Start for free
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      )}
                    </CardContent>
                    <div className="mb-4 px-6">
                      <Separator />
                    </div>
                    <CardContent className="">
                      <ul>
                        {data.monthly[plan]?.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-start gap-3 py-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        ) : (
          <div>
            <p>ola</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanCards;

// duration === PlanDuration.Monthly ?

//  <Card>
//           <CardHeader>
//             <CardTitle className="text-base font-semibold">
//               Card Title
//             </CardTitle>
//             <div className="flex items-baseline gap-1">
//               <CardTitle className=" text-3xl font-bold">USD 15</CardTitle>
//               <CardDescription>/month</CardDescription>
//             </div>
//           </CardHeader>
//           <CardContent className="mt-4">
//             <Button variant={"default"} className="w-full" disabled>
//               Start for free
//             </Button>
//           </CardContent>
//           <div className="mb-4 px-6">
//             <Separator />
//           </div>
//           <CardContent className="">Features</CardContent>
//         </Card>
