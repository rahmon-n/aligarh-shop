import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, Title } from './category.styles';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../features/categories/categories.selector';
import { useEffect, useState } from 'react';
import { CategoriesPreviewContainer } from '../categories-preview/categories-preview.styles';

const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Title>{category.toLocaleUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </>
      )}
    </CategoriesPreviewContainer>
  );
};

export default Category;
