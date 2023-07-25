// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// USEFETCH HOOK
import useFetch from "../hooks/useFetch";

// ICONS
import { FiX } from "react-icons/fi";

const CategoryNavMobile = ({ setCategoryNavMobile }) => {
  // GET CATEGORIES
  const { data } = useFetch("/categories");

  return (
    <div className="w-full h-full p-8 bg-primary">
      {/* CLOSE ICON */}
      <div
        onClick={() => setCategoryNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className="font-medium uppercase"
              key={category.id}
            >
              {category.attributes.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
