// ArrayInput.jsx
import React, { useState } from "react";

const ArrayInput = ({ label, name, onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onAdd(inputValue.trim());
      setInputValue("");
      setAddedItems([...addedItems, inputValue.trim()]);
    }
  };

  return (
		<div className="mb-4">
			<label className="block text-sm font-medium text-gray-600">
				{label}
				<div className="flex items-center mt-1">
					<input
						type="text"
						name={name}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="p-2 border border-gray-300 rounded-md w-full dark:bg-slate-700 dark:border-slate-300/20 dark:text-slate-400"
					/>
					<button
						type="button"
						onClick={handleAdd}
						className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
					>
						Add
					</button>
				</div>
			</label>
			{addedItems.length > 0 && (
				<div className="mt-2">
					<strong>Added Items:</strong>
					<ul>
						{addedItems.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
};

export default ArrayInput;
