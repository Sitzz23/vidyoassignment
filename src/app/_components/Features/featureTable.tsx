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

export function TableDemo() {
  function camelToRegular(str: string): string {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Features</TableHead>
          <TableHead>Free</TableHead>
          <TableHead>Essential</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Custom</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(featureData).map(([listname, feature]) => (
          <Collapsible asChild key={listname}>
            <>
              <CollapsibleTrigger asChild>
                <TableRow>
                  <TableCell className="flex w-full items-center justify-between">
                    {camelToRegular(listname)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex items-center justify-end">
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
                    <TableRow key={index}>
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
  );
}
