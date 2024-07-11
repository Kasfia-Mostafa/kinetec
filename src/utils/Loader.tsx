import "../styles/loader.css";

const Loader = () => {
  return (
    <div>
      <div className="loader h-[28vh]">
        <div className="wrapper">
          <div className="text">LOADING</div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
