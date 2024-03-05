import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-8 border border-dashed border-gray-200 rounded-lg border-gray-200 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
        <Construction strokeWidth={1} className="w-6 h-6 text-gray-500" />
      </div>
      <p className="text-sm font-medium text-gray-500">Under Construction</p>
    </div>
  );
}
