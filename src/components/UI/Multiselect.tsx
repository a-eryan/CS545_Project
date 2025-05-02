export interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectInlineProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

export default function MultiSelect({
  options,
  selected,
  onChange,
  className = "",
}: MultiSelectInlineProps) {
  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        return (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm font-normal text-black bg-white p-1 rounded cursor-pointer"
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleOption(option.value)}
              className="accent-[var(--color-main-text)] w-4 h-4"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}
