import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 py-20  border border-t-1 border-slate-300 border-x-0 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto ">
      <div className="text-center">
        <div>
          <a className="flex justify-center">
            <p className="flex gap-2 bg-gradient-to-tr from-yellow-600 to-amber-300 py-2 px-3 rounded font-kinetec text-slate-100 w-48">
              <img src="https://i.ibb.co/vccH9GS/dumbell-3.png" className="size-5" alt="" />
              Kinetec
            </p>
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            Providing top-quality fitness equipment to help you achieve your{" "}
            <span className="font-semibold text-yellow-600">health </span> and{" "}
            <span className="font-semibold text-yellow-600">wellness </span>
            goals
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © Kinetec 2024. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-2 text-yellow-600">
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
