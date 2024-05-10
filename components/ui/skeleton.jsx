import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-slate-500", className)} {...props} />);
}

export { Skeleton }
