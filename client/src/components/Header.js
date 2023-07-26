// REACT
import { useContext, useState } from "react";

// IMAGES
import Logo from "../img/logo.png";

// ICONS
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

// REACT ROUTER
import { Link } from "react-router-dom";

// COMPONENTS
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";

// CART CONTEXT
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [categoryNavMobile, setCategoryNavMobile] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full py-6 bg-primary lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between gap-4 mb-4 lg:items-center xl:mb-0">
          {/* MENU */}
          <div
            onClick={() => setCategoryNavMobile(true)}
            className="text-3xl cursor-pointer xl:hidden"
          >
            <FiMenu />
          </div>
          {/* CATEGORY NAV MOBILE */}
          <div
            className={`fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200 ${
              categoryNavMobile ? "left-0" : "-left-full"
            }`}
          >
            <CategoryNavMobile setCategoryNavMobile={setCategoryNavMobile} />
          </div>
          {/* LOGO */}
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          {/* SEARCHFORM - SHOW ON DESKTOP ONLY */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* PHONE & CART */}
          <div className="flex items-center gap-x-[10px]">
            {/* PHONE */}
            <div className="hidden uppercase xl:flex">
              Need help? 123 456 789
            </div>
            {/* CART ICON */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              {/* AMOUNT */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex items-center justify-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            {/* CART */}
            <div
              className={`bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300 ${
                isOpen ? "right-0" : "-right-full"
              }`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* SEARCHFROM - SHOW ON MOBILE ONLY */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
