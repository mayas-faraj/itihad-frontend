import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/menu.jsx';
import Appbar from '../components/appbar.jsx';
import Footer from '../components/footer.jsx';
import PartnerSlider from '../components/partner-slider';
import style from '../style/page.module.scss';

export default function Page({ children, logo, title, subTitle, phone, headerMenuItems, mainMenuItems, footerMenuItems, partners, footerTitle, contacts}) {
  return (
    <Fragment>
      <header>
        <Appbar logo={props.logo}/>
      </header>
      { children }
      <Footer>
         <Menu name='footer-menu' items={props.mainMenuItems}/>
        <Menu name='footer-menu' items={props.activityMenuItems}/>

      </Footer>
    </Fragment>
  );
}

Page.propTypes={
  logo: PropTypes.string,
  phone: PropTypes.string,
  headerMenuItems: PropTypes.arrayOf(PropTypes.object),
  mainMenuItems: PropTypes.arrayOf(PropTypes.object),
  footerMenuItems: PropTypes.arrayOf(PropTypes.object),
  partnersMenuItems: PropTypes.arrayOf(PropTypes.string),
  footerTitle: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object)
};
