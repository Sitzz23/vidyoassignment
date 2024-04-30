import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import PlanCards from "./plancards";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";

const TabPlan = () => {
  return (
    <div className=" w-full">
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mx-auto grid w-[90%] grid-cols-2 md:w-[55%]">
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
