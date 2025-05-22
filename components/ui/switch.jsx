"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

function Switch({
  className,
  thumbClassName,
  iconClassName,
  labelClassName,
  label = "",
  ...props
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // pill shape, correct height/width, bg-primary when checked, bg-primary/70 when unchecked
        "relative flex items-center h-8 rounded-full transition-colors duration-200 px-2 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 outline-none disabled:cursor-not-allowed disabled:opacity-50 border border-transparent",
        className
      )}
      {...props}
    >
      {/* Thumb with chevron */}
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "flex items-center justify-center bg-background shadow transition-transform size-8 rounded-full absolute left-0 top-0 translate-x-0 data-[state=checked]:translate-x-[64px] duration-200",
          thumbClassName
        )}
      >
        <ChevronRight className={cn("w-5 h-5 text-foreground", iconClassName)} />
      </SwitchPrimitive.Thumb>
      {/* Label inside switch */}
      <span
        className={cn(
          "ml-10 text-[16px] font-medium font-sans transition-opacity duration-200",
          "text-primary-foreground",
          "data-[state=unchecked]:opacity-70",
          "pointer-events-none select-none",
          labelClassName
        )}
        // visually hide when unchecked
        data-state={props.checked ? "checked" : "unchecked"}
      >
        {label}
      </span>
    </SwitchPrimitive.Root>
  );
}

export { Switch }
