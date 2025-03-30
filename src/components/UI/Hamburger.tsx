const HamburgerButton = ({
  className,
  onClick,
}: {
  className: CSSStyleValue;
  onClick: () => void;
}) => {
  return (
    <div
      className={`w-10 h-10 flex flex-col justify-center items-center gap-2 rounded cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="w-9 h-1 bg-white rounded"></span>
      <span className="w-9 h-1 bg-white rounded"></span>
      <span className="w-9 h-1 bg-white rounded"></span>
    </div>
  );
};

export default HamburgerButton;
