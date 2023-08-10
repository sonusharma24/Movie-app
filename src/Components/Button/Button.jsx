/* eslint-disable react/prop-types */
const Button = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
