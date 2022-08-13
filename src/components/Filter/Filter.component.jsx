import "./Filter.style.scss";
export default function Filter(props) {
  const { handleOnClick } = props;
  return (
    <select className="filter">
      <option
        onClick={() => {
          handleOnClick("default");
        }}
      >
        <div className="filter__option">no filter</div>
      </option>
      <option
        className="filter__option"
        onClick={() => {
          handleOnClick("veg");
        }}
      >
        veg
      </option>
      <option
        className="filter__option"
        onClick={() => {
          handleOnClick("nonveg");
        }}
      >
        non veg
      </option>
    </select>
  );
}
