import dynamic from "next/dynamic";
import React from "react";

const ContactOptions = dynamic(
  () =>
    import("@/components/ContactPageComponents/ContactOptions/ContactOptions"),
);
const ContactFaq = dynamic(
  () => import("@/components/ContactPageComponents/ContactFaq/ContactFaq"),
);
const ContactPageHero = dynamic(
  () =>
    import(
      "@/components/ContactPageComponents/ContactPageHero/ContactPageHero"
    ),
);

const Contact = () => {
  return (
    <div>
      <ContactPageHero />
      <ContactOptions />
      <ContactFaq />
    </div>
  );
};

export default Contact;
