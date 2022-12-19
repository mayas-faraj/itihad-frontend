import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../components/menu.jsx';
import LanguageSwitcher from '../components/language-switcher.jsx';
import SearchButton from '../components/search-button.jsx';
import LoginButton from '../components/login-button.jsx';
import style from '../style/appbar.module.scss';

export default function Appbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
        <Toolbar disableGutters>
          <Container maxWidth="xl">
            <img src={props.logo} alt="Arab Federation for engineering industries logo" className={style["logo"]}/>
          </Container>
          
        </Toolbar>

    <div className={style['wrapper']}>
      <Menu name='header-menu' items={ props.headerMenuItems }/>
      <LanguageSwitcher />
      <SearchButton />
      <LoginButton />
    </div>
  );
}

