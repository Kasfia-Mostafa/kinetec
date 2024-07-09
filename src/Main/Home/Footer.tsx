import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <a className="flex justify-center">
            <p className="bg-gradient-to-tr from-emerald-900 to-emerald-200 py-2 px-3 rounded-full font-kinetec text-slate-100 w-40">
              Kinetec
            </p>
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            Providing top-quality fitness equipment to help you achieve your{" "}
            <span className="font-semibold text-emerald-700">health </span> and{" "}
            <span className="font-semibold text-emerald-700">wellness </span>
            goals
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © Kinetec 2024. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-2 text-emerald-900">
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
