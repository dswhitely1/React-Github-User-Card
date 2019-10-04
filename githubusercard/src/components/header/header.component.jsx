import React from 'react';

import {ReactComponent as GitHubLogo} from '../../assests/githublogo.png';
import {ReactComponent as LambdaLogo} from '../../assests/lambdalogo.png';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <LambdaLogo/>
      <p>'s</p>
      <GitHubLogo/>
    </div>
)

export default Header;