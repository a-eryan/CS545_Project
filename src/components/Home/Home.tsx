import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import Header from "../UI/Header";
import { Link } from "react-router-dom";
import Card from "./Card";
import books from "../../assets/images/books.png";
import bookshelf from "../../assets/images/bookshelf.svg";
import evaluation from "../../assets/images/evaluation.png";
import graduation from "../../assets/images/graduation.png";
import squareAcademics from "../../assets/images/Square_academic_cap.png";
import moneyPig from "../../assets/images/money_pig.png";
import subtract from "../../assets/images/subtract.png";

const Home = () => {
  const [shortCuts] = useState([
    {
      id: "view_my_courses",
      icon: books,
      name: "View My Courses",
      link: "/courses",
    },
    {
      id: "view_my_grades",
      name: "View My Grades",
      icon: evaluation,
      link: "/academics",
    },
    {
      id: "view_financial_aid",
      name: "View Financial Aid",
      icon: graduation,
      link: "/finances",
    },
    {
      id: "course_catalog",
      name: "Course Catalog",
      icon: bookshelf,
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
      <div className="py-4 px-8 ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            {/*shortcuts heading - now inside the left column */}
            <div className="mb-4 text-[var(--color-main-text)] flex justify-center items-center">
              <p className="font-medium font-['Saira_Condensed'] text-2xl">My Shortcuts</p>
              <div className="ml-3 bg-[var(--color-primary)] p-[6px] w-6 h-6 rounded">
                <FaPen className="text-white" size={12} />
              </div>
            </div>
            
            {/*shortcuts list */}
            <ul className="flex flex-col gap-4 w-auto">
              {shortCuts.map((sc) => (
                <Link to={sc.link} key={sc.id}>
                  <li className="bg-[var(--color-primary)] gap-2 px-5 py-4 rounded text-white flex items-center">
                    <div className="h-15 w-15">
                      <img src={sc.icon} alt={sc.name} />
                    </div>
                    <p className="text-2xl">{sc.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <article className="grid grid-cols-2 gap-4 min-w-[600px] self-start mt-[52px]">
            {/* Top row - two cards */}
            <Card
              title="Academics"
              imageUrl={squareAcademics}
              link="/academics"
              className="bg-[var(--color-secondary)] text-white flex flex-col items-center justify-center p-8 rounded text-[3rem] font-medium not-italic leading-[100%]"
            />
            <Card
              title="Finances"
              imageUrl={moneyPig}
              link="/finances"
              className="bg-[var(--color-secondary)] text-white flex flex-col items-center justify-center p-8 rounded text-[3rem] font-medium not-italic leading-[100%]"
            />
            
            {/* Bottom row - spanning card */}
            <Card
              title="Campus Resources"
              imageUrl={subtract}
              link="/support"
              className="col-span-2 bg-[var(--color-secondary)] text-white flex flex-col items-center justify-center p-4 rounded text-[3rem] font-medium not-italic leading-[100%] h-[180px]"
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
