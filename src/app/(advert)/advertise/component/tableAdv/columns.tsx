"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  createdBy: string  // Include createdBy to match your data
  title: string      // Change from adTitle to title
  description: string
  file: string
  pkgType: string    // Change from pkgChoosen to pkgType
  status: "pending" | "declined" | "success" | "active"; // Add "active" to match CreatedAd
  price: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "title",  // Change from adTitle to title
    header: "Ad Title",
  },
  {
    accessorKey: "pkgType",  // Change from pkgChoosen to pkgType
    header: "Package Chosen",
  },
  {
    accessorKey: "file",  // You can add a file column if needed
    header: "File",
  },
  {
    accessorKey: "createdBy",  // Include createdBy for context if needed
    header: "Created By",
  },
  {
    accessorKey: "price",  // Add price column if needed
    header: "Price",
  }
]
