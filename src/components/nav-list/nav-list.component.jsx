import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../features/user/userSlice';
import { selectCurrentUser } from '../../features/user/user.selector';

import { List, NavLink, RowList } from './nav-list.styles';

import { links } from '../../utils/consts';

export const LIST_DIRECTIONS = {
  row: 'row',
  column: 'column'
};

const getList = (direction = LIST_DIRECTIONS.column) =>
  ({
    [LIST_DIRECTIONS.column]: List,
    [LIST_DIRECTIONS.row]: RowList
  }[direction]);

const NavList = ({ direction }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const CustomList = getList(direction);

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  return (
    <CustomList>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      ))}

      <li>
        {currentUser ? (
          <NavLink onClick={signOutHandler} as={'span'}>
            Sign out
          </NavLink>
        ) : (
          <NavLink to='/sign-in'>Sign in</NavLink>
        )}
      </li>
    </CustomList>
  );
};

export default NavList;
