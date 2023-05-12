import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../components/layout/layout.component';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { fetchCategoriesAsync } from '../../features/categories/categoriesSlice';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </Layout>
  );
};

export default Shop;
