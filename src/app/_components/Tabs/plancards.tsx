import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { PlanDuration } from "~/lib/interfaces/planduration.inerface";

const PlanCards = ({ duration }: { duration: PlanDuration }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <span className="font-semibold">Card Title</span>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlanCards;

// duration === PlanDuration.Monthly ?
