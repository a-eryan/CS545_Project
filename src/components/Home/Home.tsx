import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import Header from "../UI/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [shortCuts] = useState([
    {
      id: "view_my_courses",
      icon: "",
      name: "View My Courses",
      link: "/courses",
    },
    {
      id: "view_my_grades",
      name: "View My Grades",
      icon: "",
      link: "/academics",
    },
    {
      id: "view_financial_aid",
      name: "View Financial Aid",
      icon: "",
      link: "/finances",
    },
    {
      id: "course_catalog",
      name: "Course Catalog",
      icon: "/finances",
      link: "/courses",
    },
  ]);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <Header title={`${greeting}, User.`} />
      <div className="py-4 px-8">
        <div className="ml-4 mb-4 text-[var(--color-main-text)] flex">
          <p> My Shortcuts</p>
          <div className="ml-3 bg-[var(--color-primary)] p-[6px] w-6 h-6 rounded">
            <FaPen className="text-white" size={12} />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <ul className="flex flex-col gap-2 w-auto">
            {shortCuts.map((sc) => (
              <Link to={sc.link}>
                <li className="bg-[var(--color-primary)] px-2 py-4 rounded text-white">
                  <p className="text-2xl">{sc.name}</p>
                </li>
              </Link>
            ))}
          </ul>
          <article className="grid grid-cols-2 grid-rows-[200px_100px] gap-4 min-w-[600px] text-3xl">
            <figure className="bg-[var(--color-main-text)] text-center rounded">
              <h3>Academics</h3>
            </figure>
            <figure className="bg-[var(--color-main-text)] text-center rounded">
              <h3>Academics</h3>
            </figure>
            <figure className="bg-[var(--color-main-text)] text-center rounded col-span-2">
              <h3>Campus Resources</h3>
            </figure>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
