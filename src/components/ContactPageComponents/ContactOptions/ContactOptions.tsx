import React from "react";
import Image from "next/image";
import { contactData } from "@/testdata/contact-data";


interface Contact {
  id: number;
  icon: string;
  title: string;
  description: string;
  contactInfo: string;
}


interface ContactOptionsProps {
  contacts?: Contact[];
}

const ContactOptions: React.FC<ContactOptionsProps> = ({ contacts = contactData }) => {
  return (
    <div className="w-full px-5 lg:px-15 mt-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="min-w-[350px] md:min-w-[312px] h-[104px] lg:h-[240px] rounded-xl border bg-secondary border-basic p-2 lg:p-4 flex flex-row-reverse md:flex-row-reverse lg:flex-col  justify-between"
          >
            <div className="relative w-[40px]  lg:w-[48px] h-[40px] lg:h-[48px]">
              <Image src={contact.icon} alt={contact.title} layout="fill"
                objectFit="fill"
              />

            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-[20px] lg:text-[24px] leading-[22.4px] lg:leading-[26.88px]">{contact.title}</h2>
              <p className="font-normal text-[14px] lg:text-[16px] leading-[15.68px] lg:leading-[17.92px] text-[#9EA4AF]">
                {contact.description}
              </p>
              <p className="font-medium text-[16px] lg:text-[20px] leading-[17.92px] lg:leading-[22.4px] text-[#022D42]">{contact.contactInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOptions;
