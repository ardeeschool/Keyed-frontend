"use client"
import { ReactNode } from "react"
import { QueryProvider } from "./query-provider"
import { Toaster } from "@/components/ui/sonner"
export function Providers({ children }: { children: ReactNode }) {
  return (
      <QueryProvider>
        {children}
        <Toaster richColors position="top-right" />
      </QueryProvider>
  )
}
