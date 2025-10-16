import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col lg:flex-row gap-6 lg:gap-12 w-full",
        className
      )}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-transparent flex flex-row lg:flex-col w-full lg:w-64 gap-4 p-0",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 lg:flex-none data-[state=active]:bg-dark data-[state=active]:text-light dark:data-[state=active]:bg-light dark:data-[state=active]:text-dark data-[state=active]:border-dark dark:data-[state=active]:border-light bg-transparent text-dark dark:text-light border border-solid border-dark dark:border-light px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none min-h-[600px]", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
