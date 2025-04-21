export type App = {
  id: string;
  name: string;
  link: string;
  imageUrl: string;
};

const ResourcesCard = ({ app }: { app: App }) => {
  return (
    <div
      key={app.id}
      className="text-center flex flex-col items-center"
      onClick={() => window.open(app.link, "_blank")}
    >
      <div className="w-20 h-20 mb-2 flex items-center justify-center rounded overflow-hidden cursor-pointer">
        <img
          src={app.imageUrl}
          alt={app.name}
          className="h-full w-auto object-contain"
        />
      </div>
      <p className="text-md font-medium text-[var(--color-primary)]">
        {app.name}
      </p>
    </div>
  );
};

export default ResourcesCard;
