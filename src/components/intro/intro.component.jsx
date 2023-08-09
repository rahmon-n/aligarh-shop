import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IntroTitle, StyledIntro } from './intro.styles.js';
import Header from '../header/header.component.jsx';

const Intro = () => {
  const location = useLocation();

  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location]);

  return (
    <StyledIntro isMain={isMain}>
      <div className='container'>
        <Header />

        {isMain ? <IntroTitle>FLAWLESS TIME.</IntroTitle> : null}
      </div>
    </StyledIntro>
  );
};

export default Intro;
