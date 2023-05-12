import { SidebarContainer } from './sidebar.styles';

import NavList from '../nav-list/nav-list.component';
import CategoriesList from '../categories-list/categories-list.component';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <CategoriesList />
      <NavList />
    </SidebarContainer>
  );
};

export default Sidebar;
