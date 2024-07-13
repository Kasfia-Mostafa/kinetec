import "../styles/button.css";

const Button = () => {
  return (
    <div>
      <a className="fancy" href="#">
        <span className="top-key"></span>
        <span className="text">Checkout now</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </a>
    </div>
  );
};

export default Button;
