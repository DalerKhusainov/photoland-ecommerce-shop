// REACT HOOKS
import { useEffect, useState } from "react";

// ICONS
import { FiSearch } from "react-icons/fi";

// REACT ROUTER HOOKS
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    // CLEAR TIMEOUT EVENT
    return () => clearTimeout(timeout);
  });

  // INPUT SEARCH VALUE HANDLER
  const handlerSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  // SUBMIT SEARCH HANDLER
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // IF INPUT IS EMPTY SET ANIMATION TO TRUE
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } relative w-full`}
    >
      <input
        onChange={handlerSearchInput}
        className="input"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="absolute top-0 right-0 rounded-tl-none rounded-bl-none btn btn-accent">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
