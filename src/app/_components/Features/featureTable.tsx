import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const features = [
  {
    Feature: "Multiple Brand kits",
    Free: false,
    Essential: false,
    Growth: false,
    Custom: true,
  },
  {
    Feature: "Multiple Brand kits",
    Free: false,
    Essential: false,
    Growth: false,
    Custom: true,
  },
  {
    Feature: "Multiple Brand kits",
    Free: false,
    Essential: false,
    Growth: false,
    Custom: true,
  },
  {
    Feature: "Multiple Brand kits",
    Free: false,
    Essential: false,
    Growth: false,
    Custom: true,
  },
  {
    Feature: "Multiple Brand kits",
    Free: false,
    Essential: false,
    Growth: false,
    Custom: true,
  },
];

export function TableDemo() {
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
        {/* {features.map((feat, index) => ( */}
        <TableRow>
          <TableCell>Core</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="flex justify-end">
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
        {/* ))} */}
      </TableBody>
    </Table>
  );
}
