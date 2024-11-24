import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getOffers } from '../../api-service'; 
import Modal from '../Utils/ModalDialog'; 
import OfferCard from './OfferCard';
import LoadingIndicator from '../Utils/LoadingIndicator';

const OffersPage = () => {
  const { categoryId } = useParams(); 
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedFlyer, setSelectedFlyer] = useState(null); 
  const [categoryName, setCategoryName] = useState(''); 

  useEffect(() => {
    if (!categoryId) return; 
    
    getOffers(categoryId)
      .then((data) => {
        setOffers(data.offers);
        setLoading(false);
        if (data.offers.length > 0) {
          setCategoryName(data.offers[0].category_name);
        }
      })
      .catch((error) => {
        console.error('Error fetching offers:', error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <LoadingIndicator />; 
  }

  const openModal = (flyer) => {
    setSelectedFlyer(flyer); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFlyer(null); 
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <OfferCard key={offer.merchant_id} offer={offer} onClick={openModal} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} imageSrc={selectedFlyer} onClose={closeModal} />
    </div>
  );
};

export default OffersPage;
