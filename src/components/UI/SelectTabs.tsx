type SelectTabsProp = {
  tabs: { id: string; name: string }[];
  currentSelected: string;
  setCurrentSelected: (id: string) => void;
};

const SelectTabs: React.FC<SelectTabsProp> = ({
  tabs,
  currentSelected,
  setCurrentSelected,
}) => {
  return (
    <ul className="flex gap-4">
      {tabs.map((tab) => (
        <li
          className={`border-2 border-[var(--color-primary)] py-1 px-4 hap rounded-xl ${
            tab.id === currentSelected
              ? "bg-white"
              : "bg-[var(--color-primary)]"
          }`}
          key={tab.id}
          onClick={() => setCurrentSelected(tab.id)}
        >
          <h3
            className={
              tab.id !== currentSelected
                ? "text-white"
                : "text-[var(--color-primary)]"
            }
          >
            {tab.name}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default SelectTabs;
