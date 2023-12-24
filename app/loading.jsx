import { Loader } from "lucide-react";

export default function Loading() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    
      <Loader
        className="animate-spin"
        width={72}
        height={72}
        role="status"
        aria-label="Loading data"
      />
    </div>
  );
}
