"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, TrashIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const offenseLabels = [
  "1st Offense",
  "2nd Offense",
  "3rd Offense",
  "4th Offense",
];

export default function AddViolationTable() {
  const router = useRouter()
  const [rows, setRows] = useState([
    {
      violation: "",
      amounts: ["", "", "", ""], // One amount per offense
      fineTypes: ["", "", "", ""],
    },
  ]);


  const handleAddRow = () => {
    setRows([
      ...rows,
      { violation: "", amounts: ["", "", "", ""], fineTypes: ["", "", "", ""] },
    ]);
  };

  const handleDeleteRow = (index: number) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Table>
      <TableCaption>Violation list with multi-level offenses</TableCaption>
      <TableHeader>
        <TableCell colSpan={4} className="text-right text-muted-foreground">
          Total Violations: {rows.length}
        </TableCell>
      </TableHeader>
      <TableHeader className="uppercase">
        <TableRow className="bg-neutral-100">
          <TableHead className="min-w-[400px]">Violation</TableHead>
          <TableHead>Offense</TableHead>
          <TableHead className="min-w-[400px]">Fines</TableHead>
          <TableHead className="w-10">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {rows.map((row, rowIndex) =>
          offenseLabels.map((offense, offenseIndex) => (
            <TableRow className="border" key={`${rowIndex}-${offenseIndex}`}>
              {offenseIndex === 0 && (
                <TableCell rowSpan={4} className="p-0 relative border">
                  <div className="h-full w-full absolute top-0 p-4">
                    <Textarea
                      value={row.violation}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((r, i) =>
                            i === rowIndex
                              ? { ...r, violation: e.target.value }
                              : r
                          )
                        )
                      }
                      placeholder="Title Violation"
                      className=" text-justify flex justify-center w-full h-full shadow-none rounded px-2 py-1 border resize-none"
                    />
                  </div>
                </TableCell>
              )}
              <TableCell className="w-40">{offense}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Select
                    value={row.fineTypes?.[offenseIndex] || "Monetary Fine"}
                    onValueChange={(newValue) => {
                      const updatedFineTypes = [...(row.fineTypes || [])];
                      updatedFineTypes[offenseIndex] = newValue;

                      setRows((prev) =>
                        prev.map((r, i) =>
                          i === rowIndex
                            ? { ...r, fineTypes: updatedFineTypes }
                            : r
                        )
                      );
                    }}
                  >
                    <SelectTrigger className="w-full max-w-[600px]">
                      <SelectValue placeholder="Select fine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monetary Fine">
                        Monetary Fine
                      </SelectItem>
                      <SelectItem value="Community Service">
                        Community Service
                      </SelectItem>
                      <SelectItem value="License Sanction">
                        License Sanction
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {(row.fineTypes?.[offenseIndex] === "Monetary Fine" ||
                    row.fineTypes?.[offenseIndex] === "") && (
                    <div className="flex gap-2 items-center">
                      <p>₱</p>
                      <Input
                        type="number"
                        value={row.amounts[offenseIndex]}
                        onChange={(e) => {
                          const newAmounts = [...row.amounts];
                          newAmounts[offenseIndex] = e.target.value;
                          setRows((prev) =>
                            prev.map((r, i) =>
                              i === rowIndex ? { ...r, amounts: newAmounts } : r
                            )
                          );
                        }}
                        className="border border-[#24a75262] rounded px-2 py-1"
                      />
                    </div>
                  )}
                </div>
              </TableCell>
              {offenseIndex === 0 && (
                <TableCell rowSpan={4} className="align-top pt-1">
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="w-10"
                      onClick={handleAddRow}
                    >
                      <PlusCircle></PlusCircle>
                    </Button>
                    {rows.length > 1 && (
                      <Button
                        className="w-10"
                        variant="destructive"
                        onClick={() => handleDeleteRow(rowIndex)}
                      >
                        <TrashIcon></TrashIcon>
                      </Button>
                    )}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
