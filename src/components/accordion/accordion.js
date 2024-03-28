import { useState } from 'react';

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-character-container border border-gray-200 rounded my-4">
      <div
        className="accordion-summary p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h4 className="font-bold">{title}</h4>
      </div>
      {isOpen && (
        <div className="accordion-description p-4">
          <p>{description || "No description for this comic ;("}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;