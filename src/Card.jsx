
import React from 'react';

const Card = ({ image, title, location, rating, price, cardStyle, onFavorite, isFavorite }) => {
  return (
    <div className={`w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 bg-white flex flex-col ${cardStyle}`}>
      <div className="relative w-full h-0 pb-[100%]">
        <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-bold text-xl mb-2 truncate">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{location}</p>
        <div className="mt-auto flex items-center">
          <span className="inline-block bg-yellow-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">{rating} ★</span>
          <span className="inline-block text-gray-700 text-sm">{price}</span>
          <button
            className={`ml-auto p-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'} focus:outline-none`}
            onClick={onFavorite}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">View Details</a>
        </div>   
      </div>
    </div>
  );
};

export default Card;
