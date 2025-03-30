import { PiUserCircleLight } from "react-icons/pi";
const ContactCard = ({
  name,
  number,
  link,
}: {
  name: string;
  link: string;
  number: string;
}) => {
  return (
    <div className="flex mx-1 items-center gap-3">
      <div>
        <PiUserCircleLight size={75} />
      </div>
      <div className="grow p-0 m-0 flex flex-col gap-2">
        <div>{name}</div>
        <div className="flex justify-between">
          <a className="!underline cursor-pointer" href={`mailto:${link}`}>
            {link}
          </a>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

type ContactListProp = {
  list: {
    name: string;
    number: string;
    link: string;
  }[];
};

const ContactList: React.FC<ContactListProp> = ({ list }) => {
  return (
    <ul className="bg-[var(--color-secondary)] space-y-1 text-2xl flex flex-col gap-4 px-4 py-4">
      {list.map((card, idx) => (
        <li
          key={idx}
          className={`cursor-pointer hover:text-[var(--color-accent)] `}
        >
          <ContactCard name={card.name} number={card.number} link={card.link} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
export { ContactCard };
