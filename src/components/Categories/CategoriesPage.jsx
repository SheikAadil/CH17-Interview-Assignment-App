import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../api-service';
import CategoryCard from './CategoryCard';
import LoadingIndicator from '../Utils/LoadingIndicator';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  const handleCategoryClick = (categoryId, categoryName) => {
    navigate(`/offers/${categoryId}`, { state: { categoryName } });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category.id, category.name)}/>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
