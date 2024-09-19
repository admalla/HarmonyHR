import * as React from "react"

import { cn } from "@/shared/lib/utils/utils"
import {Search} from "@/assets/icons/Search";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const classNames = {
      Search: {
        wrapper: "flex items-center w-[400px] pl-2 mr-14 rounded-xl border border-black focus-within:border-black focus-within:ring-2 focus-within:ring-black bg-card text-card-foreground",
        input: "flex h-9 w-full rounded-md border-0 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
      },
      Email:  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    }
    return (
      <div
        className={type === 'search' ? cn(classNames.Search.wrapper) : ''}
      >
        {type === 'search' && <Search/>}
        <input
          type={type}
          className={type === 'search' ? cn(classNames.Search.input, className) : cn(classNames.Email, className)}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export {Input}
