import { useNavigate } from "react-router-dom";

type LinksPanelProp = {
  links: {
    name: string;
    link: string;
  }[];
};

const LinksPanel: React.FC<LinksPanelProp> = ({ links }) => {
  const navigate = useNavigate();
  return (
    <ul className="bg-[var(--color-secondary)] space-y-1 text-2xl flex flex-col gap-2 px-6 py-3">
      {links.map((li, idx) => (
        <li
          key={idx}
          onClick={() => navigate(li.link)}
          className={`cursor-pointer hover:text-[var(--color-accent)] `}
        >
          {li.name}
        </li>
      ))}
    </ul>
  );
};

export default LinksPanel;
