import { CgGym } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="my-80 grid place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <div className="cursor-pointer border-t-4 border-yellow-300 transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
          <div className="flex gap-3">
            <CgGym className="text-5xl text-yellow-500" />
            <div>
              <span className="font-bold text-yellow-600 text-xl">
                Cardio Equipment
              </span>
              <div className="flex items-center gap-3">
                <p className="line-clamp-3 text-slate-600">See more</p>
                <FaArrowRightLong className="mt-1 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer border-l-4 border-yellow-300 transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
          <div className="flex gap-3">
            <CgGym className="text-5xl text-yellow-500" />
            <div>
              <span className="font-bold text-yellow-600 text-xl">
                Strength Training
              </span>
              <div className="flex items-center gap-3">
                <p className="line-clamp-3 text-slate-600">See more</p>
                <FaArrowRightLong className="mt-1 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer border-t-4 border-yellow-300 transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
          <div className="flex gap-3">
            <CgGym className="text-5xl text-yellow-500" />
            <div>
              <span className="font-bold text-yellow-600 text-xl">
                Yoga & Pilates
              </span>
              <div className="flex items-center gap-3">
                <p className="line-clamp-3 text-slate-600">See more</p>
                <FaArrowRightLong className="mt-1 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer border-l-4 border-yellow-300 transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
          <div className="flex gap-3">
            <CgGym className="text-5xl text-yellow-500" />
            <div>
              <span className="font-bold text-yellow-600 text-xl">
                Accessories
              </span>
              <div className="flex items-center gap-3">
                <p className="line-clamp-3 text-slate-600">See more</p>
                <FaArrowRightLong className="mt-1 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
