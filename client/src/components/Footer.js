/* eslint-disable jsx-a11y/anchor-is-valid */
// ICONS
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="mb-6 font-semibold uppercase h2">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        {/* FORM */}
        <form className="flex flex-col w-full max-w-3xl gap-5 mx-auto md:flex-row my-14">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* LINKS */}
        <div className="flex mx-auto text-base capitalize text-white/60 gap-x-6 max-w-max mb-9">
          <a href="#" className="transition-all hover:text-white">
            Return policy
          </a>
          <a href="#" className="transition-all hover:text-white">
            Track your order
          </a>
          <a href="#" className="transition-all hover:text-white">
            Shipping & delivery
          </a>
        </div>
        {/* SOCIALS */}
        <div className="flex mx-auto mb-16 text-lg gap-x-6 max-w-max">
          <a href="#" className="transition-all hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" className="transition-all hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="transition-all hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="transition-all hover:text-white">
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-sm text-center text-white/60">
            Copyright &copy; Photoland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
