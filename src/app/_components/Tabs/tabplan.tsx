import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import PlanCards from "./plancards";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";

const TabPlan = () => {
  return (
    <Tabs defaultValue="monthly" className=" w-[420px]">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">
          Yearly
          <Badge className="ml-2" variant={"accent"}>
            Upto 51% off
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monthly">
        <PlanCards duration={PlanDuration.Monthly} />
      </TabsContent>
      <TabsContent value="yearly">
        <PlanCards duration={PlanDuration.Yearly} />
      </TabsContent>
    </Tabs>
  );
};

export default TabPlan;
