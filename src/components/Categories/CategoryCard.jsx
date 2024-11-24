import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all transform hover:scale-105" onClick={onClick} >
      <div className="flex flex-col items-center justify-center">
        <img
          src={category.image}
          alt={category.name}
          className="w-40 h-40 object-contain mb-4"/>
        <h2 className="text-lg font-semibold text-center">{category.name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
