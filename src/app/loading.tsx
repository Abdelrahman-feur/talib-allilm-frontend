import { LoaderCircle } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen text-primary text-9xl">
      <LoaderCircle strokeWidth={2} size={50} className="animate-spin" />
    </div>
  );
};

export default loading;
