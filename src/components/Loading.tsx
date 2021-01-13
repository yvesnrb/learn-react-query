import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-5 h-5 bg-red-400 rounded-full animate-ping" />
    </div>
  );
};

export default Loading;
