import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder, onChangeSearch }) => (
  <form>
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 px-4 pr-10 bg-slate-200 rounded-full focus:outline focus:outline-emerald-500 transition-all ease duration-300 placeholder:text-slate-700 placeholder:font-medium text-slate-600"
        onChange={onChangeSearch}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <i className="fa-solid fa-search text-slate-700" />
      </div>
    </div>
  </form>
);

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
