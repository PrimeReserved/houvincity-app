import React from "react";
import Button from "@/components/Buttons/Button";

const ScrollToContactButton: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Pass scrollToContact as a prop to the Button component
  return <Button scrollToContact={scrollToContact} />;
};

export default ScrollToContactButton;
