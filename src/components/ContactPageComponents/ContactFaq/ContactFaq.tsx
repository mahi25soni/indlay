"use client";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { faqItems } from "@/testdata/faq-data";

interface QuestionItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  questions: QuestionItem[];
}

const ContactFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(faqItems[0].category);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpenIndex(null);
  };

  const filteredQuestions = faqItems.find(item => item.category === selectedCategory)?.questions || [];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-15 mt-16 text-center">
        <div className="mx-auto flex flex-col items-center">
          <p className="font-medium text-[32px] leading-[38.4px]">Frequently Asked Questions</p>
          <div className="w-[492px] flex justify-center gap-2 mt-4">
            {faqItems.map((item) => (
              <p
                key={item.category}
                onClick={() => handleCategoryChange(item.category)}
                className={`cursor-pointer rounded-70 px-3 py-1 text-sm border ${
                  selectedCategory === item.category ? "bg-primary border-basic" : "border-basic"
                }`}
              >
                {item.category}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[870px] mt-6 gap-6">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className={`w-[869px] rounded-2xl transition-all duration-300 ${
              openIndex === index ? "bg-white shadow-sm" : "border-b "
            }`}
          >
            <button
              className="flex justify-between items-center p-4 rounded-2xl w-full cursor-pointer focus:outline-none"
              onClick={() => toggleOpen(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h2 className="text-[20px] leading-[22px] font-medium">{item.question}</h2>
              {openIndex === index ? (
                <CiCircleMinus className="text-gray-500 w-8 h-8" />
              ) : (
                <IoAddCircleOutline className="text-gray-500 w-8 h-8" />
              )}
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-4 pb-4 transition-opacity duration-300 ease-in-out"
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFaq;
