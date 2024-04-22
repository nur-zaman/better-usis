import { AlertTriangleIcon } from "lucide-react";

export default function ErrorComponent({ message }: { message?: string }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg w-full max-w-sm flex items-center gap-4">
      <AlertTriangleIcon className="h-5 w-5 text-red-500" />
      <div className="text-sm text-gray-500 grid gap-1">
        <h3 className="font-medium">Error fetching data</h3>
        <p className="text-red-500">
          {message || "There was an error. Please try again."}
        </p>
      </div>
    </div>
  );
}
