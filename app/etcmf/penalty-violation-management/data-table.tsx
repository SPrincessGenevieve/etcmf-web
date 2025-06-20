"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, // default rows per page
  });

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: false, // set to true if you want to fetch data manually
  });
  const [goToPage, setGoToPage] = useState("");
  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();

  const paginationRange = getPaginationRange(currentPage, totalPages);

  function getPaginationRange(
    current: number,
    total: number
  ): (number | "...")[] {
    const delta = 1;
    const range: (number | "...")[] = [];

    for (let i = 0; i < total; i++) {
      const page = i;

      if (
        page === 0 || // First page
        page === total - 1 || // Last page
        (page >= current - delta && page <= current + delta)
      ) {
        range.push(page);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }

    return range;
  }

  function handleGoToPage() {
    const pageNumber = parseInt(goToPage, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      table.setPageIndex(pageNumber - 1); // zero-based index
      setGoToPage(""); // optional: clear input after navigation
    }
  }

  return (
    <div className="rounded-md border h-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="uppercase text-[12px]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="text-[12px] uppercase"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 px-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border bg-[#ebebeb] w-[40px] h-[40px]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>

        {paginationRange.map((page, index) =>
          page === "..." ? (
            <Button
              key={`ellipsis-${index}`}
              variant={"ghost"}
              disabled
              className="rounded-full border bg-[#ebebeb] w-[40px] h-[40px] opacity-50"
            >
              <Ellipsis />
            </Button>
          ) : (
            <Button
              key={`page-${page}`}
              onClick={() => table.setPageIndex(page)}
              variant={"ghost"}
              className={`rounded-full border bg-[#ebebeb] w-[40px] h-[40px] ${
                currentPage === page
                  ? "bg-[#3D7B1E] text-white hover:bg-[#daffd2]"
                  : ""
              }`}
            >
              {page + 1}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="sm"
          className="rounded-full border bg-[#ebebeb] w-[40px] h-[40px]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>

        <div className="flex gap-2 justify-center items-center">
          <p className="text-[#464646]">Go to page:</p>
          <Input
            type="number"
            min={1}
            max={totalPages}
            value={goToPage}
            onChange={(e) => setGoToPage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGoToPage();
              }
            }}
            className="rounded-full text-center max-w-[70px] text-[12px] bg-[#ebebeb]"
          />
          <Button
            onClick={handleGoToPage}
            className="rounded-full border bg-[#3D7B1E] text-white hover:bg-[#daffd2] w-[40px] hover:text-[black] h-[40px]"
          >
            GO
          </Button>
        </div>
      </div>
    </div>
  );
}
