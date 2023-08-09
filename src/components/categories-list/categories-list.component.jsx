import { Link } from 'react-router-dom';
import { categories } from '../../utils/consts';

import { StyledCategoriesList } from './categories-list.styles';

const CategoriesList = () => {
  return (
    <StyledCategoriesList>
      {categories.map(({ category, link }, idx) => (
        <li key={category + idx}>
          <Link to={link}>{category}</Link>
        </li>
      ))}
    </StyledCategoriesList>
  );
};

export default CategoriesList;
