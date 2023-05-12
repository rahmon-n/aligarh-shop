import { useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import SHOP_DATA from '../../shop-data';

const categories = [
  {
    id: 0,
    title: 'watches',
    imageUrl: 'images/directory/pic1.jpg',
    route: 'shop/watches'
  },
  {
    id: 1,
    title: 'Caps & Hats',
    imageUrl: 'images/directory/cap.jpg',
    route: 'shop/caps'
  },
  {
    id: 2,
    title: 't-shirts',
    imageUrl: 'images/directory/pic2.jpg',
    route: 'shop/t-shirts'
  },

  {
    id: 3,
    title: 'shoes',
    imageUrl: 'images/directory/pic9.jpg',
    route: 'shop/shoes'
  },

  {
    id: 4,
    title: 'bags',
    imageUrl: 'images/directory/s6.jpg',
    route: 'shop/bags'
  }
];

const Directory = () => {
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  });

  return (
    <DirectoryContainer>
      {categories.map(({ id, ...otherProps }) => (
        <DirectoryItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
