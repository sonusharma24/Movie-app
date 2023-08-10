/* eslint-disable react/prop-types */
const ErrorMessage = ({ errorMessage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "15px",
        height: "100%",
      }}
    >
      {" "}
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;
