import React from "react";

const Spinner = () => {
  return (
    <div
      datatest-id="spinner"
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90"
    >
      <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
