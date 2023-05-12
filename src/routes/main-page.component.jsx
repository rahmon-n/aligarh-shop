import Footer from '../components/footer.component';
import Intro from '../components/intro/intro.component';
import { Outlet } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <Intro />

      <Outlet />

      <Footer />
    </>
  );
}
