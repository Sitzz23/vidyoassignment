import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import PlanCards from "./plancards";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";
import { Slider } from "~/components/ui/slider";

const TabPlan = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center justify-between ">
        <p>Suggesting an ideal plan for producing around 125 clips monthly</p>
        <Slider defaultValue={[33]} max={100} step={1} className="w-[30vw]" />
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
