import React from "react";

interface children {
  children: React.ReactNode;
}

export default function Inner({ children }: children) {
  return (
    <>
      <div className="flex-grow relative mt-16 mx-auto p-4 pb-16 max-w-[770px] bg-[#fffdfa] min-h-screen">
        {children}
      </div>
    </>
  );
}
