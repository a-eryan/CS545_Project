import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  imageUrl: string;
  link: string;
  className?: string;
};
const Card: React.FC<CardProps> = ({ title, className, link, imageUrl }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <figure
      className={
        "bg-[var(--color-main-text)] hover:bg-[var(--color-primary)] hover:shadow-xl text-center rounded flex flex-col items-center justify-center p-2 cursor-pointer " +
        className
      }
      onClick={() => handleClick()}
    >
      <div className="w-25 h-25 object-cover flex justify-center items-center rounded-t">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
    </figure>
  );
};

export default Card;
