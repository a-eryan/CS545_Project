import React, { ReactNode } from "react";
import star from "../../assets/images/star.png";

type HeaderProp = {
  title: string;
  searchBar?: ReactNode;
  rightSide?: ReactNode;
};

const Header: React.FC<HeaderProp> = ({ title, searchBar, rightSide }) => {
  return (
    <div>
      <div className="flex items-center mb-3 justify-between">
        <div className="flex items-center">
          <img src={star} alt="" className="w-6 h-6" />
          <h2 className="ml-4 text-[var(--color-main-text)] text-4xl">
            {title}
          </h2>
        </div>
        {searchBar}
        {rightSide}
      </div>
      <hr className="text-[var(--color-primary)]" />
    </div>
  );
};

export default Header;
