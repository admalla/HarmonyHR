"use client"

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Arrow} from "@/assets/icons/Arrow";

const invoices = [
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '-5',
    earnedDays: '3.00',
    balance: '3.00'
  }
]

export const TableWrapper = () => {
  return (
    <Table>
      <TableHeader className="bg-[#DAE6F2]">
        <TableRow className="text-sm font-medium leading-[17px]">
          <TableHead className="flex items-center gap-1">Date <Arrow /></TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Used Days (-)</TableHead>
          <TableHead>Earned Days (+)</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(6).fill(invoices[0]).map((invoice, index) => (
          <TableRow key={index}>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.description}</TableCell>
            <TableCell>{invoice.usedDays}</TableCell>
            <TableCell>{invoice.earnedDays}</TableCell>
            <TableCell>{invoice.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}