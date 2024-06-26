"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
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
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const PlanCards = ({ duration }: { duration: PlanDuration }) => {
  const planData =
    duration === PlanDuration.Monthly ? data.monthly : data.yearly;
  const [planName, setPlanName] = useState("growth");

  const [customCost, setCustomCost] = useState(
    duration === PlanDuration.Monthly ? 52 : 19,
  );
  const [value, setValue] = useState([125]);

  useEffect(() => {
    if (value[0]! >= 200) {
      console.log("reached 200");
      setPlanName("custom");
    }
    if (value[0]! < 200) {
      setPlanName("growth");
    }
  }, [value]);

  function newMonthCost(selectedMins: number) {
    const costPerMin = duration === PlanDuration.Monthly ? 5.8 : 2.1;
    const cost = Math.round((selectedMins / 100) * costPerMin);
    setCustomCost(cost);
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        <p className=" text-center text-base sm:text-left md:text-left md:text-xl lg:text-left">
          <Balancer>
            Suggesting an ideal plan for producing around
            <span className="font-semibold text-[#943DEC]">
              {" "}
              &nbsp;{value}&nbsp;{" "}
            </span>
            clips monthly
          </Balancer>
        </p>
        <div className="flex w-full items-center justify-center gap-4 md:justify-end">
          <span className=" text-xs text-[#61615B] md:inline">50</span>
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
          <span className=" text-xs text-[#61615B] md:inline">200+</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 md:max-w-[64rem] md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
        {Object.keys(planData).map((plan, index) => (
          <div key={index} className="min-h-full">
            <Card
              className={`${
                plan === planName ? "bg-[#252521] text-[#F6F6F2]" : "bg-white"
              } h-full`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-medium tracking-[0.1px]">
                  {planData[plan]?.title}
                  {plan === planName && (
                    <Badge variant="accent" className="rounded-md text-xs">
                      Recommended
                    </Badge>
                  )}
                </CardTitle>
                <div className="flex items-baseline gap-1">
                  <CardTitle className="pt-2 text-3xl font-bold">
                    USD&nbsp;
                    {plan === "custom" ? customCost : planData[plan]?.cost}
                  </CardTitle>
                  <CardTitle className="text-sm">/month</CardTitle>
                </div>
                {planData === data.yearly && (
                  <CardDescription
                    className={` text-xs ${plan === "free" && "select-none text-transparent"}`}
                  >
                    Billed annually at{" "}
                    <strong>{planData[plan]?.desc} off</strong>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="mt-4 flex-grow">
                {plan === "free" ? (
                  <Button variant="default" className="w-full" disabled>
                    Start for free
                  </Button>
                ) : (
                  <Button
                    variant={plan === planName ? "accent" : "outline"}
                    className={`w-full`}
                  >
                    Choose this plan
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
              <CardContent className="flex flex-col gap-4">
                {plan === "custom" && (
                  <div className={`flex flex-col justify-start gap-1  `}>
                    <span className="text-sm">Select minutes</span>
                    <Select
                      defaultValue="900"
                      onValueChange={(value) => newMonthCost(Number(value))}
                    >
                      <SelectTrigger
                        className={`${plan === planName ? "bg-[#252521] text-[#F6F6F2]" : "bg-white"} w-full`}
                      >
                        <SelectValue placeholder="Select minutes" />
                      </SelectTrigger>
                      <SelectContent
                        className={`${plan === planName ? "bg-[#252521] text-[#F6F6F2]" : "bg-white"}`}
                      >
                        <SelectGroup>
                          <SelectItem value="900">900 mins</SelectItem>
                          <SelectItem value="1200">1200 mins</SelectItem>
                          <SelectItem value="1500">1500 mins</SelectItem>
                          <SelectItem value="1800">1800 mins</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <ul>
                  {planData[plan]?.features.map((feature, index) => (
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
    </div>
  );
};

export default PlanCards;
