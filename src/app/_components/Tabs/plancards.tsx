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

const PlanCards = ({ duration }: { duration: PlanDuration }) => {
  return (
    <div className="mt-6">
      {duration === PlanDuration.Monthly ? (
        <div className="mx-auto grid max-w-sm grid-cols-1 items-start gap-4 px-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {Object.keys(data.monthly).map((plan, index) => (
            <div key={index}>
              <Card className=" ">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">
                    {data.monthly[plan]?.title}
                  </CardTitle>
                  <div className="flex items-baseline gap-1">
                    <CardTitle className="text-3xl font-bold">
                      {plan === "free" ? "USD 0" : "USD 15"}
                    </CardTitle>
                    <CardDescription>/month</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <Button variant={"default"} className="w-full" disabled>
                    Start for free
                  </Button>
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
