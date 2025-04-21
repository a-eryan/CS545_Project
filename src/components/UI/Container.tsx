import { PiCaretDownBold } from "react-icons/pi";
import { ReactNode, useState } from "react";

type ContainerProp = {
  title: string;
  className?: string;
  isOpen?: boolean;
  body?: ReactNode;
  background?: boolean;
  titleSize?: string;
  bodySize?: string;
  titlePosition?: string;
};

const Container: React.FC<ContainerProp> = ({
  title,
  body,
  isOpen = false,
  className = "",
  background = true,
  titleSize = "text-2xl",
  bodySize = "text-lg",
  titlePosition = "text-center",
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(isOpen);

  return (
    <div className={"rounded-2xl overflow-hidden transition-all " + className}>
      <div
        className={
          "relative items-center py-3 gap-3 text-center " +
          (background && "bg-[var(--color-primary)] ") +
          titleSize +
          " " +
          titlePosition
        }
      >
        <h2 className={`${!background && "text-[var(--color-main-text)]"}`}>
          {title}
        </h2>
        <div
          className={
            "absolute items-center bg-transparent p-2 right-2 top-1 cursor-pointer " +
            bodySize
          }
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <PiCaretDownBold
            size={35}
            className={`transition-transform duration-300 ${
              isPanelOpen ? "rotate-180" : ""
            }  ${!background && "text-[var(--color-main-text)]"}`}
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
