import { spinnerLogo } from "../assets/spinner.svg";

const Spinner = () => {
  return (
    <div>
      <div>
        <img
          src={spinnerLogo}
          alt="Spinner Logo"
          style={{ height: "24px", width: "24px" }}
        />
      </div>
    </div>
  );
};

export default Spinner;
