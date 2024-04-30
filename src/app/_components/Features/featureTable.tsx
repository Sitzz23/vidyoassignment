"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { featureData } from "./tableData";

export function FeatureTable() {
  function camelToRegular(str: string): string {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return (
    <div className="w-full overflow-clip rounded-md border">
      <Table className=" shadow-md">
        <TableHeader className="">
          <TableRow className="bg-[#FAFAF8]">
            <TableHead className=" font-medium text-zinc-950">
              Features
            </TableHead>
            <TableHead className=" font-normal text-zinc-950">Free</TableHead>
            <TableHead className=" font-normal text-zinc-950">
              Essential
            </TableHead>
            <TableHead className=" font-normal text-zinc-950">Growth</TableHead>
            <TableHead className=" font-normal text-zinc-950">Custom</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(featureData).map(([listname, feature]) => (
            <Collapsible asChild key={listname}>
              <>
                <CollapsibleTrigger asChild>
                  <TableRow className="bg-white ">
                    <TableCell className="flex w-[300px] items-center justify-between text-base font-semibold">
                      {camelToRegular(listname)}
                    </TableCell>

                    <TableCell className="select-none text-transparent">
                      75 mins
                    </TableCell>
                    <TableCell className="select-none text-transparent">
                      200 - 500 mins
                    </TableCell>
                    <TableCell className="select-none text-transparent">
                      200 - 1000 mins
                    </TableCell>
                    <TableCell className="flex items-center justify-end">
                      <span className="select-none text-transparent">
                        200-11 mins
                      </span>
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
                    </TableCell>
                  </TableRow>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <>
                    {feature.map((feat, index) => (
                      <TableRow
                        key={index}
                        className={`${index % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"} `}
                      >
                        <TableCell>{feat.Feature}</TableCell>
                        <TableCell>{feat.Free}</TableCell>
                        <TableCell>{feat.Essential}</TableCell>
                        <TableCell>{feat.Growth}</TableCell>
                        <TableCell>{feat.Custom}</TableCell>
                      </TableRow>
                    ))}
                  </>
                </CollapsibleContent>
              </>
            </Collapsible>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
