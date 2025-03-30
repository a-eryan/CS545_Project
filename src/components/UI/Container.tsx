import { PiCaretDownBold } from "react-icons/pi";
import { ReactNode, useState } from "react";

type ContainerProp = {
  title: string;
  isOpen?: boolean;
  body?: ReactNode;
};

const Container: React.FC<ContainerProp> = ({
  title,
  body,
  isOpen = false,
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(isOpen);

  return (
    <div className="rounded-2xl overflow-hidden transition-all ">
      <div className="relative text-2xl items-center py-3 gap-3 bg-[var(--color-primary)] text-center">
        <h2>{title}</h2>
        <div
          className="absolute items-center text-lg bg-transparent p-2 right-2 top-1 cursor-pointer"
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <PiCaretDownBold
            size={35}
            className={`transition-transform duration-300 ${
              isPanelOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isPanelOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {body}
      </div>
    </div>
  );
};

export default Container;
