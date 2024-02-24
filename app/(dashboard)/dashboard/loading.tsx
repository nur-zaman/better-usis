import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className=" h-[50vh] w-full" />
        <Skeleton className="h-[50vh] w-full" />
      </div>
    </div>
  );
}
