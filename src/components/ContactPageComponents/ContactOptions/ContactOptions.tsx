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
    <div className="w-full px-15 mt-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="min-w-[312px] h-[240px] rounded-xl border bg-secondary border-basic p-4 flex flex-col justify-between"
          >
            <Image src={contact.icon} alt={contact.title} width={48} height={48} />

            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-2xl leading-[26.88px]">{contact.title}</h2>
              <p className="font-normal text-base leading-[17px] text-[#9EA4AF]">
                {contact.description}
              </p>
              <p className="font-medium text-xl text-[#022D42]">{contact.contactInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOptions;
