import Header from "../UI/Header";
import resources from "../../assets/resources.json";
import ResourcesCard from "./ResourcesCard";

const Resources = () => {
  return (
    <div>
      <Header title="Additional Support and Campus Resources" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-7">
        {resources.map((resource) => (
          <ResourcesCard app={resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
