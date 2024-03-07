import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const SkeletonCard = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <Skeleton className="text-sm font-medium" />
      <Skeleton className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <Skeleton className="text-2xl font-bold" />
      <Skeleton className="flex flex-row">
        <Skeleton className="text-xs text-muted-foreground">
          <Skeleton className="w-full" />
        </Skeleton>
        <Separator className="mx-1" orientation="vertical" />
        <Skeleton className="text-xs text-muted-foreground flex flex-row">
          <Skeleton>
            <Skeleton className="w-full" />
          </Skeleton>
          <Skeleton className="text-[0.6rem] pl-2">
            <Skeleton className="w-full" />
          </Skeleton>
        </Skeleton>
        <Separator className="mx-1" orientation="vertical" />
      </Skeleton>
    </CardContent>
  </Card>
);

export default function TabContentSkeleton() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>

      <Skeleton className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>
              <Skeleton className="w-full" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2"></CardContent>
        </Card>

        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>
              <Skeleton className="w-full" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[...Array(7)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="flex items-center"
                >
                  <Skeleton className="ml-4 space-y-1">
                    <Skeleton className="text-sm font-medium leading-none" />
                    <Skeleton className="text-sm text-muted-foreground">
                      <Skeleton className="w-full h-5" />
                    </Skeleton>
                  </Skeleton>
                  <Skeleton className="ml-auto font-medium">
                    <Skeleton className="w-full h-5" />
                  </Skeleton>
                </Skeleton>
              ))}
            </div>
          </CardContent>
        </Card>
      </Skeleton>
    </>
  );
}
