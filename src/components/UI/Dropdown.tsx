import { useState, useRef, useEffect } from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function Dropdown({
  options,
  selected,
  onChange,
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const selectedLabel =
    options.find((opt) => opt.value === selected)?.label || "Select";

  return (
    <div
      ref={dropdownRef}
      className={`relative min-w-20 max-w-xs ${className}`}
    >
      <button
        type="button"
        className="w-full text-nowrap px-4 py-2 text-left rounded-md shadow-sm cursor-pointer text-white border"
        style={{ backgroundColor: "var(--color-main-text)" }}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedLabel}
      </button>
      {open && (
        <ul
          className="absolute z-10 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto text-white border"
          style={{ backgroundColor: "var(--color-main-text)" }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 hover:bg-opacity-80 cursor-pointer ${
                option.value === selected ? "font-semibold underline" : ""
              }`}
              style={{ backgroundColor: "var(--color-main-text)" }}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
