import { useEffect, useMemo, useState } from "react";
import Header from "../UI/Header";
import SelectTabs from "../UI/SelectTabs";
import Dropdown from "../UI/Dropdown";
import Container from "../UI/Container";
import MultiSelect from "../UI/Multiselect";
import {
  selectTabs,
  semesterOptions,
  filterOptions,
  yearOptions,
  Course,
} from "./courseFilter";
import courses from "../../assets/courses.json";
import CourseCard from "./CourseCard";

const CourseCatalog = () => {
  const [selected, setSelected] = useState<string | null>(
    selectTabs[0].id || null
  );
  const [year, setYear] = useState<string>(yearOptions[0].value);
  const [semester, setSemester] = useState<string>(semesterOptions[0].value);

  const [filter, setFilter] = useState<{
    Subject: string[];
    "Section Status": string[];
    "Campus Locations": string[];
    Locations: string[];
    "Instructional Format": string[];
    "Delivery Mode": string[];
    Instructors: string[];
    "Meeting Days": string[];
    "Meeting Patterns": string[];
    "Academic Periods": string[];
    "Flexible Dates": string[];
  }>({
    Subject: [],
    "Section Status": [],
    "Campus Locations": [],
    Locations: [],
    "Instructional Format": [],
    "Delivery Mode": [],
    Instructors: [],
    "Meeting Days": [],
    "Meeting Patterns": [],
    "Academic Periods": [],
    "Flexible Dates": [],
  });

  const handleDropdownChange = (
    selectedValue: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    console.log(selectedValue);
    setFunction(selectedValue);
  };
  const coursesData = courses;
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  useEffect(() => {
    const filtered = coursesData.filter((course: Course) => {
      const subjectMatch =
        filter.Subject.length === 0 || filter.Subject.includes(course.subject);
      const statusMatch =
        filter["Section Status"].length === 0 ||
        filter["Section Status"].includes(course.status);
      const campusMatch =
        filter["Campus Locations"].length === 0 ||
        filter["Campus Locations"].includes(course.campus);
      const locationMatch =
        filter.Locations.length === 0 ||
        filter.Locations.includes(course.location);
      const deliveryModeMatch =
        filter["Delivery Mode"].length === 0 ||
        filter["Delivery Mode"].includes(course.delivery);
      const meetingPatternsMatch =
        filter["Meeting Patterns"].length === 0 ||
        filter["Meeting Patterns"].includes(course.meetingPatterns);
      const academicPeriodsMatch =
        filter["Academic Periods"].length === 0 ||
        filter["Academic Periods"].includes(course.academicPeriods);
      const flexibleDatesMatch =
        filter["Instructors"].length === 0 ||
        filter["Instructors"].includes(course.Instructor);
      const programMatch = selected === "All" || selected === course.degreeType;
      const semesterMatch = semester === "" || semester === course.term;
      const yearMatch = year === "" || year === course.year;
      return (
        subjectMatch &&
        statusMatch &&
        campusMatch &&
        locationMatch &&
        deliveryModeMatch &&
        meetingPatternsMatch &&
        academicPeriodsMatch &&
        flexibleDatesMatch &&
        programMatch &&
        semesterMatch &&
        yearMatch
      );
    });
    console.log("Filtered Courses: ", filtered);
    setFilteredCourses(filtered);
  }, [coursesData, selected, year, semester, filter]);

  const renderFilter = useMemo(() => {
    return Object.entries(filter).map((item) => (
      <Container
        title={item[0]}
        isOpen={true}
        titlePosition="text-left"
        titleSize="text-xl"
        background={false}
        body={
          <MultiSelect
            options={filterOptions.get(item[0]) || []}
            selected={item[1]}
            onChange={(values) => {
              setFilter((prev) => ({
                ...prev,
                [item[0]]: values,
              }));
            }}
          />
        }
      />
    ));
  }, [filter]);

  return (
    <div>
      <div className="border-b-2 border-[var(--color-primary)]">
        <Header title="Course Catalog" />
      </div>
      <div className="py-4 px-1">
        {selected && (
          <SelectTabs
            tabs={selectTabs}
            currentSelected={selected}
            setCurrentSelected={setSelected}
            extraComponent={
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
            }
          />
        )}
      </div>
      <div className="flex gap-4">
        <div className="min-w-[300px]">{renderFilter}</div>
        <div className="flex-1 border-l-2 border-t-2 border-[var(--color-primary)]">
        {filteredCourses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
