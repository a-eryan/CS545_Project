import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/STEVENSLOGO.png";
import HamburgerButton from "./UI/Hamburger";
import { GoBell } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { User, useUser } from "../store/userContext";
import Searchbar from "./UI/Searchbar";

type NavProp = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
};

const Navbar: React.FC<NavProp> = ({ menuOpen, setMenuOpen }) => {
  const [messageCount] = useState(0);

  const [showUserSelect, setShowUserSelect] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const userSelectRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { setUser } = useUser();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node) &&
        userSelectRef.current &&
        !userSelectRef.current.contains(event.target as Node)
      ) {
        setShowUserSelect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userSelect = (
    <div className="absolute right-[20px] top-[70px] w-40" ref={userSelectRef}>
      <div className="relative bg-[var(--color-main-text)] text-white rounded p-3 shadow-md text-xl">
        <div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 
        border-l-8 border-l-transparent 
        border-r-8 border-r-transparent 
        border-b-8 border-b-gray-800"
        ></div>
        <ul className="flex flex-col gap-2 space-y-1 text-center font-semibold">
          <Link to="">
            <h3 className="text-white">User Profile</h3>
          </Link>
          <Link to="">
            <h3 className="text-white">Change Password</h3>
          </Link>

          <h3 className="text-white cursor-pointer" onClick={() => setUser(null)}>
            Sign Out
          </h3>
          <Link to="">
            <h3 className="text-white">Emergency Info</h3>
          </Link>
          <Link to="">
            <h3 className="text-white">My Report</h3>
          </Link>
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="fixed z-40 h-[80px] w-full bg-[var(--color-primary)] text-[var(--color-white)] p-5 flex justify-between shadow">
      <div className="flex">
        <HamburgerButton
          className="mx-3"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="h-[100%] overflow-hidden" onClick={() => navigate("/")}>
          <img src={logo} className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      <Searchbar />

      <div className="flex gap-5">
        <div className="relative" onClick={() => navigate("/notifications")}>
          <GoBell size={40} />
          <span className="absolute -top-1 -right-0 bg-yellow-400 text-[var(--color-primary)] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {messageCount}
          </span>
        </div>

        <div
          className="relative"
          ref={avatarRef}
          onClick={() => setShowUserSelect(!showUserSelect)}
        >
          <RxAvatar size={40} />
        </div>

        {showUserSelect && userSelect}

        <GoQuestion size={40} onClick={() => navigate("/support")} />
      </div>
    </nav>
  );
};

export default Navbar;
