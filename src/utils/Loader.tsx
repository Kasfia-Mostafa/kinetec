const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-10 h-10 flex gap-1 items-center justify-center">
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-sky-600 rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-sky-600 rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-sky-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
