import { StyledLayout } from './layout.styles';
import Sidebar from '../sidebar/sidebar.component';

const Layout = ({ isMain, children }) => {
  return (
    <StyledLayout isMain={isMain}>
      <div className='container'>
        <Sidebar />
        {children}
      </div>
    </StyledLayout>
  );
};

export default Layout;
