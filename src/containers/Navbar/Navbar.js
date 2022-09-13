import React, { useContext, useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icons.min.css'
import {GoThreeBars, GoTriangleUp} from 'react-icons/go'
import {GrClose} from 'react-icons/gr'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import i18next from 'i18next';
import logo from '../../assets/logo.jpeg'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../base';
import { User } from '../../App';
import { doc } from 'firebase/firestore';

const Navbar = () => {
	const userData = useContext(User)
	const auth = getAuth(app)
		let currentLang = cookie.get('i18next')
		useEffect(() => {
			if(currentLang === 'ar'){
				document.documentElement.setAttribute('lang',currentLang);
				document.dir = 'rtl';
				userData.setLang('ar');
			}else{
				document.documentElement.setAttribute('lang',currentLang);
				document.dir = 'ltr';
				userData.setLang('en');
			}
		}, [currentLang]);
		const langs = [
			{
			code: 'en',
			name: 'English',
			country_code: 'gb',
			dir:'ltr'
			},
			{
			code: 'ar',
			name: 'العربية',
			country_code: 'eg',
			dir: 'rtl'
			},
		]
		let [navbar,setNavbar] = useState(false)
		let [nestedProducts,setNestedProducts] = useState(false)
		let [nestedLangs,setNestedLangs] = useState(false)
		const {t} = useTranslation()  
		const handleNavbar = () => {
			setNavbar(!navbar)
		}
		const closeNavbar = (e) => {
			setNavbar(false)
			setNestedProducts(false)
		}
		const handleLangs = (code) => {
			setNavbar(false)
			i18next.changeLanguage(code)
		}
		let signInfo = "nav_login";
		if(!userData.isAuth){
			signInfo = "nav_signup"
		}
		const signOutMethod = () => {
			if(userData.isAuth){
				signOut(auth)
			}else{
				userData.setShow(true)
				userData.setLogin(true)
			}
		}
	
	return (
		<User.Consumer>
			{(data) => 
				<div className='navbar'>
					<div>
						<div className='nav-items' style={{left: navbar && userData.lang === 'en' ? '0' : '-100vw',right: navbar && userData.lang !== 'en' ? '0' : '-100vw', transition:'0.4s'}}>
							<ul className='ul'>
								<NavLink className='item' onClick={closeNavbar} to='/'>{t("nav_home")}</NavLink>
								<li onClick={() => setNestedProducts(!nestedProducts)} className='item products'>
							{t("nav_products")}
							{nestedProducts &&
                          	<ul className='nested-products'>
                          	<GoTriangleUp className='arrow' />
							{['silver-products','gold-products','goldwdiamond_products'].map(item => 
								<NavLink key={item} className='nested-item' onClick={closeNavbar} to={`/${item}`}>{t(`${item}`)}</NavLink>
							)}
                          </ul>
                        }
                      </li>
						<NavLink onClick={closeNavbar} className='item' to='/special-order'>{t("nav_specialOrder")}</NavLink>
						<NavLink onClick={closeNavbar} className='item' to='contactus'>{t("nav_contact")}</NavLink>
						<a onClick={signOutMethod} className='item'>{t(signInfo)}</a>
							<li className='item products' onClick={() => setNestedLangs(!nestedLangs)}>
                        <span>{currentLang.toUpperCase()}</span>
                        {nestedLangs &&
                        <ul className='nested-languages'>
                          <GoTriangleUp className='arrow' />
                          {langs.map(({code, name, country_code}) =>( 
                            <li className='nested-item' onClick={() => handleLangs(code)} key={country_code} >
                              <span style={{marginRight: '10px'}} className={`flag-icon flag-icon-${country_code}`}></span>
                              <span onClick={closeNavbar}>{name}</span>
                            </li>
                          )
                          )}
                        </ul>
							}
                      </li>
							<NavLink style={{position:'relative'}} onClick={closeNavbar} className='item' to='/cart'>
								<AiOutlineShoppingCart size={26} />
								<span className='cart-length'>{ data.isAuth ? data.cartLength : 0}</span>
							</NavLink>
							</ul>
							<GrClose size={23} onClick={() => setNavbar(false)} className='close' />
						</div>
						<GoThreeBars size={23} onClick={handleNavbar} className='bars' />
					</div>
					<div className='logo'>
						<NavLink to='/'>
							<img className='logo' src={logo} />
						</NavLink>
					</div>

				</div>
			}
		</User.Consumer>
	)
}

export default Navbar