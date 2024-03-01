import listaProductos from "../../../MOCK_DATA.json";

function Categories({ onCategorySelect, selectedCategory }) {
  const productList = listaProductos;
  const uniqueCategories = [
    ...new Set(productList.map((product) => product.category)),
  ];
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="border-b-2 pb-4 overflow-x-auto w-full">
      <div className="flex items-start gap-x-2 pt-4">
        <button
          className={`rounded-xl py-2 px-4 text-white ${
            selectedCategory === null ? "bg-green-500" : "bg-slate-400"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          Todos
        </button>
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            className={`rounded-xl py-2 px-4 text-white bg-slate-400 hover:text-white hover:bg-green-500 ${
              selectedCategory === category && "bg-green-500"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {capitalizeFirstLetter(category)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
