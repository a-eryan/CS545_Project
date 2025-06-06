import { useEffect, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { PiPiggyBank } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GoInfo } from "react-icons/go";
import Home from "./Home/Home";
import Academics from "./Academics/Academics";
import Finances from "./Finances/Finances";
import Notifications from "./Others/Notifications";
import Support from "./Support/Support";
import CourseCatalog from "./Courses/CourseCatalog";
import Resources from "./Resources/Resources";
import LoginPage from "./Login";
import { useUser } from "../store/userContext";
import CourseTable from "./Courses/CourseTable";

type MainProp = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main: React.FC<MainProp> = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        e.target instanceof Node &&
        //@ts-expect-error contains is valid
        menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen, setMenuOpen]);

  const { user } = useUser();

  return (
    <>
      {user ? (
        <>
          <div className="h-20" />
          <div className="overflow-scroll h-full w-full flex transition-all duration-300 bg-[#E4E5E6]">
            <div
              className={`fixed left-0 h-full w-72 bg-[var(--color-primary)] shadow-lg transform transition-transform duration-300 z-30
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              <nav className="flex flex-col px-8 py-10 space-y-4 text-2xl gap-3">
                <div className="flex items-center gap-2">
                  <PiPiggyBank size={40} />
                  <Link to="/finances">
                    <h2 className="text-white">Finances</h2>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineAcademicCap size={40} />
                  <Link to="/academics" className="no-underline">
                    <h2 className="text-white">Academics</h2>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <GoInfo size={40} />
                  <Link to="/resources" className="no-underline text-nowrap">
                    <h2 className="text-white">Campus Resources</h2>
                  </Link>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <main
              ref={menuRef}
              className={`transition-all duration-300 min-h-screen w-full ${
                menuOpen ? "ml-72" : "ml-0"
              }`}
            >
              <div className="m-6 h-full rounded-2xl box-content bg-white shadow-2xs text-left p-9">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/academics" element={<Academics />} />
                  <Route path="/courses" element={<CourseCatalog />} />
                  <Route path="/my-courses" element={<CourseTable />} />
                  <Route path="/finances" element={<Finances />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </div>
            </main>
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Main;
