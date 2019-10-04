import React from 'react';

import gitHubLogo from '../../assests/githublogo.png';
import lambdaLogo from '../../assests/lambdalogo.png';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <img src={lambdaLogo} alt="Lambda Logo" />
      <p><span role="img">❤️</span>'s</p>
      <img src={gitHubLogo} alt="GitHub Logo" />
    </div>
);

export default Header;