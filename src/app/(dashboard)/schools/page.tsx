// src/app/(dashboard)/schools/page.tsx
"use client"

import { useQuery } from "@tanstack/react-query"
import { schoolsApi } from "@/lib/api/schools.api"
import { queryKeys } from "@/lib/api/query-keys"
import { School } from "@/types/school"
import { Building2, Calendar, Hash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// ─── Format date helper ──────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

// ─── Loading Skeleton ────────────────────────────────────────
function SchoolCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-20 mt-1" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  )
}

// ─── School Card ─────────────────────────────────────────────
function SchoolCard({ school }: { school: School }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Logo / Avatar */}
            <div className="h-10 w-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{school.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                <Hash className="h-3 w-3" />
                <span>{school.code}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">Active</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground space-y-1 border-t pt-3">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          <span>Created {formatDate(school.created_at)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          <span>Updated {formatDate(school.updated_at)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Main Page ───────────────────────────────────────────────
export default function SchoolsPage() {
  const { data: schools, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.schools.all,
    queryFn:  schoolsApi.getAll,
  })

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schools</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isLoading ? "Loading..." : `${schools?.length ?? 0} schools registered`}
          </p>
        </div>
      </div>

      {/* Error */}
      {isError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Failed to load schools. Make sure your Django server is running at{" "}
          <code className="font-mono">http://127.0.0.1:8000</code>
          <br />
          <span className="text-xs opacity-70 mt-1 block">
            {(error as any)?.message}
          </span>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <SchoolCardSkeleton key={i} />)
          : schools?.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
      </div>

      {/* Empty state */}
      {!isLoading && !isError && schools?.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <Building2 className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No schools found</p>
          <p className="text-sm mt-1">Schools added from the backend will appear here.</p>
        </div>
      )}
    </div>
  )
}