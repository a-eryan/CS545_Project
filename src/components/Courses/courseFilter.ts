import { MultiSelectOption } from "../UI/Multiselect";

export function isCourseCompleted(course: any): boolean {
  if (!course.startEndDate) return false;
  
  const endDateStr = course.startEndDate.split(' - ')[1];
  const endDate = new Date(endDateStr);
  const spring2025Start = new Date('01/20/2025');
  
  return endDate < spring2025Start;
}

export const filterOptions: Map<string, MultiSelectOption[]> = new Map([
  [
    "Subject",
    [
      { label: "Computer Science", value: "computer-science" },
      { label: "Mathematics", value: "mathematics" },
      { label: "Mechanical Engineering", value: "mechanical-engineering" },
      { label: "School of Humanities, Arts ...", value: "humanities-arts" },
      {
        label: "Physics & Engineering Physics",
        value: "physics-engineering-physics",
      },
    ],
  ],
  [
    "Section Status",
    [
      { label: "Open", value: "open" },
      { label: "Closed", value: "closed" },
      { label: "Waitlist", value: "waitlist" },
    ],
  ],
  [
    "Campus Locations",
    [
      { label: "Hoboken - Main Campus", value: "hoboken" },
      { label: "WebCampus", value: "webcampus" },
      { label: "Off Campus", value: "off-campus" },
    ],
  ],
  [
    "Locations",
    [
      { label: "Babbio 321", value: "babbio-321" },
      { label: "Gateway South 122", value: "gateway-south-122" },
      { label: "ABS Engineering Center 301", value: "abs-301" },
      { label: "Babbio 122", value: "babbio-122" },
    ],
  ],
  [
    "Instructional Format",
    [
      { label: "Online", value: "online" },
      { label: "In Person", value: "inPerson" },
    ],
  ],
]);

export const selectTabs = [
  { id: "All", name: "All" },
  { id: "Undergraduate", name: "Undergraduate" },
  { id: "Non-Degree", name: "Non-Degree" },
  {
    id: "Graduate",
    name: "Graduate",
  },
  { id: "Doctoral", name: "Doctoral" },
  {
    id: "Certificate Programs",
    name: "Certificate Programs",
  },
];

export const yearOptions = [ //make it the other way around, workday was notorious for this  
  { label: "Academic Year", value: "" },
  { label: "Year 2026", value: "2026" },
  { label: "Year 2025", value: "2025" },
  { label: "Year 2024", value: "2024" },
  { label: "Year 2023", value: "2023" },
];

export const semesterOptions = [
  { label: "Semester", value: "" },
  { label: "Spring", value: "spring" },
  { label: "Summer", value: "summer" },
  { label: "Fall", value: "fall" },
  { label: "Winter", value: "winter" },
];

export type Course = {
  id: string;
  title: string;
  subject: string;
  status: string;
  campus: string;
  location: string;
  delivery: string;
  Instructor: string;
  meetingPatterns: string;
  academicPeriods: string;
  degreeType: string;
  program: string;
  year: string;
  term: string;
  description: string;
};

export const myCourses = [
  {
    course: "CS 554 - Web Programming II",
    units: 3,
    gradingBasis: "Graded",
    section: "WS",
    registrationStatus: "Registered",
    instructionalFormat: "Lecture",
    deliveryMode: "Online",
    meetingPatterns: "WebCampus",
    instructor: "Patrick Hill",
    startEndDate: "09/02/2025 - 12/22/2025",
  },
  {
    course: "CS 396 - Security, Privacy and Society",
    units: 4,
    gradingBasis: "Graded",
    section: "B",
    registrationStatus: "Registered",
    instructionalFormat: "Lecture",
    deliveryMode: "In-Person",
    meetingPatterns: "Mon/Wed/Fri 11:00 AM - 11:50 AM | Edwin A. Stevens 230",
    instructor: "Tegan Brennan",
    startEndDate: "09/02/2025 - 12/22/2025",
  },
  {
    course: "CS 396-LD - Security, Privacy and Society",
    units: 4,
    gradingBasis: "Graded",
    section: "LD",
    registrationStatus: "Registered",
    instructionalFormat: "Laboratory",
    deliveryMode: "In-Person",
    meetingPatterns: "Thursday 12:30 PM - 2:20 PM | Burchard 104",
    instructor: "Tegan Brennan",
    startEndDate: "09/02/2025 - 12/22/2025",
  },
  {
    course: "CS 334 - Theory of Computation",
    units: 3,
    gradingBasis: "Graded",
    section: "D",
    registrationStatus: "Registered",
    instructionalFormat: "Lecture",
    deliveryMode: "In-Person",
    meetingPatterns: "Tues/Thurs 9:30 AM - 10:45 AM | Gateway South 122",
    instructor: "Jacek Ossowski",
    startEndDate: "09/02/2025 - 12/22/2025",
  },
  {
    course: "SSW 590 - DevOps Principles and Practices",
    units: 3,
    gradingBasis: "Graded",
    section: "WS",
    registrationStatus: "Waitlisted",
    instructionalFormat: "Lecture",
    deliveryMode: "Online",
    meetingPatterns: "WebCampus",
    instructor: "Patrick Hill",
    startEndDate: "09/02/2025 - 12/22/2025",
  },
];
