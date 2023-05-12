import { Link, useNavigate } from 'react-router-dom';
import { DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <h4>{title}</h4>
      <div>
        <Link to={route}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
