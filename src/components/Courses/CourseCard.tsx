import { Course } from "./courseFilter";
import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";

const CourseCard = ({ course }: { course: Course }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <div
      className={
        "overflow-hidden py-2 px-4 w-full transition-all text-[var(--color-main-text)] border-b-1 border-[var(--color-primary)]"
      }
    >
      <div className={"relative items-center py-3 gap-3 text-center "}>
        <div>
          <h2 className="text-[var(--color-primary)] text-2xl text-left capitalize">
            {course.title}
          </h2>
          <p className="text-[var(--color-secondary-highlight)] text-left capitalize text-[16px]">
            {course.subject} | {course.status} | {course.Instructor}
          </p>
          <p className="text-[var(--color-primary)] text-left capitalize text-[16px]">
            {course.location} | {course.meetingPatterns} | {course.delivery}
          </p>
        </div>

        <div
          className={
            "absolute items-center bg-transparent p-2 right-2 top-1 cursor-pointer "
          }
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <PiCaretDownBold
            size={20}
            className={`transition-transform duration-30 text-[var(--color-primary)]`}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isPanelOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <h3> Description:</h3>

        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
