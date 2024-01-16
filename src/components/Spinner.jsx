import spinner from "../assets/spinner.svg";

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="h-40 mx-auto mt-10" />
    </div>
  );
};

export default Spinner;
