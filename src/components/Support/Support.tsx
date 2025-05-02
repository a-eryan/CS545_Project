import { useState } from "react";
import SelectTabs from "../UI/SelectTabs";
import Header from "../UI/Header";
import Container from "../UI/Container";
import LinksPanel from "../UI/LinksPanel";

const supportResources = [
  {
    "Navigating Workday Tutorials": [
      { name: "Additional User Guides for Students", link: "" },
      { name: "General User Guides for Students", link: "" },
      { name: "New Student Onboarding (Video)", link: "" },
      { name: "New Student Tour (Video)", link: "" },
      { name: "Overview and Features (Video)", link: "" },
    ],
  },
  {
    "Student Resources": [
      { name: "Changing Majors/Degree Programs", link: "" },
      { name: "Taking a Leave of Absence", link: "" },
      { name: "Transferring SEVIS Records", link: "" },
      { name: "Reduced Load for Students", link: "" },
      { name: "Leave of Absence", link: "" },
      { name: "Create Request", link: "" },
      { name: "Student Employment", link: "" },
    ],
  },
];

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
      <div className="border-b-2 border-[var(--color-primary)]">
        <Header title="Student Help and Support" />
      </div>
      <div className="py-4 px-1">
        {selected && (
          <SelectTabs
            tabs={selectTabs}
            currentSelected={selected}
            setCurrentSelected={setSelected}
          />
        )}
      </div>
      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-7 gap-10">
        {supportResources.map((resource) => (
          <Container
            title={Object.keys(resource)[0]}
            isOpen={true}
            body={<LinksPanel links={Object.values(resource)[0]} />}
          />
        ))}
      </section>
    </div>
  );
};

export default Support;
