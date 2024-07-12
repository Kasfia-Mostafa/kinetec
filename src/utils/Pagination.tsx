const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="flex select-none justify-center items-center gap-3 ">
        <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
          {pages.map((page) => (
            <div
              onClick={() => {
                setCurrentPage(page);
              }}
              className={` cursor-pointer hover:scale-110 text-sm scale-100 
                transition-all duration-200 px-3 ${
                  page == currentPage ? "bg-yellow-500 text-white" : "bg-white"
                } border-yellow-300  font-semibold text-gray-700   py-[6px] rounded-full`}
              key={page}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
