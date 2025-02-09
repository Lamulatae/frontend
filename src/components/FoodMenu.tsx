import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Trash2 } from "lucide-react";

const FoodMenuDropDown = () => {
  const [foodList, setFoodList] = useState([]);

  const foodOptions = {
    Appetizers: ["Spring Rolls", "Garlic Bread", "Bruschetta"],
    Entrees: ["Grilled Chicken", "Pasta Primavera", "Beef Steak"],
  };

  const removeFood = (foodToRemove) => {
    setFoodList(foodList.filter((food) => food !== foodToRemove));
  };

  return (
    <div className="flex flex-col items-center h-auto">
      <div className="w-full max-w-8xl">
        <h3 className="text-lg text-start font-semibold text-gray-800">
          Select Food
        </h3>
        <div className="flex justify-end items-center mb-4">
          <div className="relative mb-20">
            <select
              className="absolute right-0 w-52 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value &&
                  value !== "Select Food" &&
                  !foodList.includes(value)
                ) {
                  setFoodList([...foodList, value]);
                }
              }}
            >
              <option>Select Food</option>
              {Object.keys(foodOptions).map((category) => (
                <optgroup label={category} key={category}>
                  {foodOptions[category].map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          {foodList.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {foodList.map((food, index) => (
                <div
                  key={index}
                  className="flex items-center bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md"
                >
                  <h2 className="flex items-center">{food}</h2>
                  <button onClick={() => removeFood(food)} className="ml-2">
                    <Trash2 className="text-white" size={18} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No foods selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodMenuDropDown;
