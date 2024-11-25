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
          <p className="font-youth font-medium text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38.4px]">Frequently Asked Questions</p>
          <div className="w-full  flex justify-center gap-2 mt-4 lg:overflow-hidden overflow-y-auto scrollbar-hidden">
            {faqItems.map((item) => (
              <p
                key={item.category}
                onClick={() => handleCategoryChange(item.category)}
                className={`cursor-pointer rounded-70 px-3 py-1 whitespace-nowrap text-sm border ${selectedCategory === item.category ? "bg-primary border-basic" : "border-basic"
                  }`}
              >
                {item.category}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[350px] lg:w-[870px] mt-6 gap-6 text-left">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className={`w-[350px] lg:w-[869px] rounded-2xl transition-all duration-300 ${openIndex === index ? "bg-white shadow-sm" : "border-b "
              }`}
          >
            <button
              className="flex justify-between items-center p-2 lg:p-4 rounded-2xl w-full cursor-pointer focus:outline-none"
              onClick={() => toggleOpen(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h2 className="text-left text-[16px] lg:text-[20px] leading-[17.92px] lg:leading-[22px] font-medium ">{item.question}</h2>
              {openIndex === index ? (
                <CiCircleMinus className="text-gray-500 lg:w-8 lg:h-8 w-6 h-6" />
              ) : (
                <IoAddCircleOutline className="text-gray-500 lg:w-8 lg:h-8 w-6 h-6" />
              )}
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-2 pb-4 transition-opacity duration-300 ease-in-out"
              >
                <p className="text-gray-600 text-[14px] lg:text-[16px] leading-[15.68px] lg:leading-[17.92px]">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFaq;
