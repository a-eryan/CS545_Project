import { useState } from "react";
import Header from "../UI/Header";
import ProgressCircle from "./ProgressCircle";
import Container from "../UI/Container";
import LinksPanel from "../UI/LinksPanel";

const Academics = () => {
  const [academicSummary] = useState({
    actionToDo: [],
    holds: [],
    actionsDone: [],
    grades: {
      cumulativeGPA: 4,
      programGPA: 4,
      creditRequired: 120,
      creditEarned: 100,
    },
  });

  return (
    <div>
      <div className="border-b-2 border-[var(--color-primary)]">
        <Header title="Academics" />
      </div>
      <div className="grid grid-cols-2 mt-7 gap-10">
        <section className="flex flex-col gap-5">
          <figure className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[var(--color-primary)] text-center rounded-2xl">
            <div className="p-3 border-r-2 border-[var(--color-accent)]">
              <p className="text-4xl font-bold text-[var(--color-accent)]">0</p>
              <p className="text-2xl">Actions To Do</p>
            </div>

            <div className="p-3 border-r-2 border-[var(--color-accent)]">
              <p className="text-4xl font-bold text-[var(--color-accent)]">0</p>
              <p className="text-2xl">Holds</p>
            </div>

            <div className="p-3">
              <p className="text-4xl font-bold text-[var(--color-accent)]">0</p>
              <p className="text-2xl">Actions Done</p>
            </div>
          </figure>
          <Container title="Important Contacts" />
          <Container title="Upcoming Registration Appointments" />
          <Container
            title="My Academics"
            isOpen={true}
            body={
              <figure className="bg-[var(--color-primary)] text-center flex flex-col items-center gap-2">
                <div className="grid grid-cols-3 gap-4 p-3">
                  <button className="!bg-[var(--color-main-text)] hover:!bg-[var(--color-secondary-highlight)] rounded">
                    Registration Appointments
                  </button>
                  <button className="!bg-[var(--color-main-text)] hover:!bg-[var(--color-secondary-highlight)] rounded">
                    Generate Unofficial Transcript
                  </button>
                  <button className="!bg-[var(--color-main-text)] hover:!bg-[var(--color-secondary-highlight)] rounded">
                    View Grades
                  </button>
                </div>
                <ProgressCircle
                  percentage={
                    (academicSummary.grades.creditEarned /
                      academicSummary.grades.creditRequired) *
                    100
                  }
                />
                <div className="mt-2 text-2xl p-2">
                  <p className="mb-1">
                    Cumulative GPA:{" "}
                    {academicSummary.grades.cumulativeGPA.toFixed(2)}
                  </p>
                  <p>
                    Program of Study GPA:{" "}
                    {academicSummary.grades.programGPA.toFixed(2)}
                  </p>
                </div>
              </figure>
            }
          />
        </section>
        <section>
          <div className="space-y-6">
            <Container
              title="Planning & Registration"
              isOpen={true}
              body={
                <LinksPanel
                  links={[
                    { name: "Course Catalog", link: "/courses" },
                    { name: "View My Saved Schedules", link: "" },
                    {
                      name: "Request Course Section Prerequisite Override",
                      link: "",
                    },
                    {
                      name: "View My Courses",
                      link: "/my-courses",
                    },
                  ]}
                />
              }
            />

            <Container
              title="Academic Advising"
              isOpen={true}
              body={
                <LinksPanel
                  links={[
                    { name: "View My Academic Progress", link: "" },
                    { name: "View My Academic Plan", link: "" },
                    {
                      name: "Create Saved Schedule from Plan",
                      link: "",
                    },
                    {
                      name: "Program Completion Request / Status",
                      link: "",
                    },
                  ]}
                />
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
