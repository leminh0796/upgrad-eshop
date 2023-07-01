import Select from "react-select";
import store from "store";
import { setSortBy } from "store/actions/filterActions";

export default function SortSelect() {
  const options = [
    { value: "default", label: "Default" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "newest", label: "Newest" },
  ];
  return (
    <>
      <label>Sort by:</label>
      <Select
        options={options}
        name="sortBy"
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            maxWidth: 300,
          }),
        }}
        onChange={(selectedOption) => {
          store.dispatch(setSortBy(selectedOption.value));
        }}
      />
    </>
  );
}
