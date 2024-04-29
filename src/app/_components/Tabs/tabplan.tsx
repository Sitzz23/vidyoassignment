"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import PlanCards from "./plancards";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";
import { Slider } from "~/components/ui/slider";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import Balancer from "react-wrap-balancer";

const TabPlan = () => {
  const [value, setValue] = useState([125]);
  return (
    <div className="flex w-full flex-col gap-8">
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
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mx-auto grid w-[400px] grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">
            Yearly
            <Badge className="ml-2" variant={"accent"}>
              Upto 51% off
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="">
          <PlanCards duration={PlanDuration.Monthly} />
        </TabsContent>
        <TabsContent value="yearly">
          <PlanCards duration={PlanDuration.Yearly} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabPlan;
