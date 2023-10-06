import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2">
      <div
        className="flex   border-b-2 justify-between rounded-t-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        <h1 className="text-l font-weight-[400] ">{title}</h1>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {isOpen && <div className="p-4 mx-auto">{children}</div>}
    </div>
  );
};


export default Accordion;