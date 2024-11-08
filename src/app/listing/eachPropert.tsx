"use client";
import React from "react";

interface EachPropertProps {
  onClose: () => void;
}

const EachPropert: React.FC<EachPropertProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 z-50 w-[600px] h-[824px] bg-white p-4 shadow-lg transform transition-transform duration-300 ease-out">
      <button onClick={onClose} className="text-right text-xl">✕</button>
      <div>eachPropert</div>
    </div>
  );
};

export default EachPropert;
