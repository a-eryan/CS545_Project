import { useState } from "react";
import SelectTabs from "../UI/SelectTabs";
import Header from "../UI/Header";

const Support = () => {
  const selectTabs = [
    { id: "Support Resources", name: "Support Resources" },
    { id: "Registrar Office", name: "Registrar Office" },
    {
      id: "Undergrad Advising Resources",
      name: "Undergrad Advising Resources",
    },
    { id: "Grad Advising Resources", name: "Grad Advising Resources" },
    {
      id: "Student Accounts / Financial Aid",
      name: "Student Accounts / Financial Aid",
    },
  ];
  const [selected, setSelected] = useState<string | null>(
    selectTabs[0].id || null
  );

  return (
    <div>
      <Header title="Student Help and Support" />
      <div className="py-4 px-1">
        {selected && (
          <SelectTabs
            tabs={selectTabs}
            currentSelected={selected}
            setCurrentSelected={setSelected}
          />
        )}
      </div>
    </div>
  );
};

export default Support;
