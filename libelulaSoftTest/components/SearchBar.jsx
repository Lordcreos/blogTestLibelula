import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-4 mb-8"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar por título o categoría..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold p-2 rounded-lg transition duration-500 ease transform hover:-translate-y-1"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
