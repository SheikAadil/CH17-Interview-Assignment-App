import React from 'react';

const OfferCard = ({ offer, onClick }) => {
  return (
    <div
      key={offer.merchant_id}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all transform hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={offer.company_logo}
          alt={offer.company_name}
          className="w-32 h-32 object-contain mb-2"/>
        <h2 className="text-lg font-semibold text-center mb-2">{offer.title}</h2>
        <button
          onClick={() => onClick(offer.flyer)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
          View Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
