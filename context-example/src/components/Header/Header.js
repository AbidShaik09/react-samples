import React from 'react';
import PropTypes from 'prop-types';
import { AppHeader, ParaWrapper } from './Header.styled';

const Header = () => (
 <AppHeader>
    <ParaWrapper>Book my venue</ParaWrapper>
       <ul >
         <li style={{'display':'inline'}}>Login</li>
         <li style={{'display':'inline'}}>Logout</li>
       </ul>
 </AppHeader>
);

 

export default Header;
