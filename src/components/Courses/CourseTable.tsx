import { HiPencil } from "react-icons/hi2";
import Header from "../UI/Header";
import Dropdown from "../UI/Dropdown";
import { myCourses, semesterOptions, yearOptions } from "./courseFilter";
import { useState } from "react";

export default function CourseTable() {
  const [year, setYear] = useState<string>(yearOptions[0].value);
  const [semester, setSemester] = useState<string>(semesterOptions[0].value);
  const handleDropdownChange = (
    selectedValue: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(selectedValue);
  };

  const headers = [
    "Course Listing",
    "Units",
    "Grading Basis",
    "Section",
    "Registration Status",
    "Instructional Format",
    "Delivery Mode",
    "Meeting Patterns",
    "Instructor",
    "Start/End Date",
    "",
  ];

  const filteredCourses = myCourses; // Assuming filteredCourses is the same as myCourses for now

  return (
    <div className="overflow-x-auto p-4 text-[var(--color-main-text)]">
      <div className="border-b-2 border-[var(--color-primary)]">
        <Header title="View My Courses" />
      </div>
      <div className="flex gap-4 items-center my-1">
        <p className="text-2xl">Major: Computer Science </p>
        <div className="flex gap-4">
          <Dropdown
            options={yearOptions}
            selected={year}
            onChange={(e) => {
              handleDropdownChange(e, setYear);
            }}
          />
          <Dropdown
            options={semesterOptions}
            selected={semester}
            onChange={(e) => {
              handleDropdownChange(e, setSemester);
            }}
          />
        </div>
      </div>
      <table className="min-w-full border-2 border-[var(--color-primary)]">
        <thead className="bg-[var(--color-primary)] text-[var(--color-accent)]">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left p-2 border-2 border-[var(--color-primary)] font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, idx) => (
            <tr key={idx} className="border-2 border-[var(--color-primary)]">
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.course}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.units}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.gradingBasis}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.section}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.registrationStatus}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.instructionalFormat}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.deliveryMode}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)] whitespace-pre-wrap">
                {course.meetingPatterns}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.instructor}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)]">
                {course.startEndDate}
              </td>
              <td className="p-2 border-2 border-[var(--color-primary)] text-center">
                <button className="text-[var(--color-primary)] hover:text-red-600">
                  <HiPencil size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
