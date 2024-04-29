import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";

const TabPlan = () => {
  return (
    <Tabs defaultValue="account" className="w-[420px]">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="account">Monthly</TabsTrigger>
        <TabsTrigger value="password">
          Yearly{" "}
          <Badge className="ml-2" variant={"accent"}>
            Upto 51% off
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default TabPlan;
