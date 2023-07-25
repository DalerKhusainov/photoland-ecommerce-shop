// useFetch HOOK
import useFetch from "../hooks/useFetch";

// REACT ROUTER
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="flex items-center justify-center py-4 font-semibold uppercase bg-accent text-primary">
          Browse Categories
        </div>
        <div className="flex flex-col p-6 gap-y-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="uppercase cursor-pointer"
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
