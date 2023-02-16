import React from 'react';
import styles from './MenuSideBar.module.css';
import logo from '../../assets/blackwhite.png';
import {Route, Routes, BrowserRouter, NavLink} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import {routeConfig} from "../config/routeConfig";



const MenuSideBar = () => {
    return (
        <BrowserRouter>

            <div className={styles.sideBarWrapper}>
                <img src={logo} alt={'logo'} width={'49px'}/>

                <ul className={styles.listMenu}>
                    <li>
                        <NavLink to="/"
                                 className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                                 className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                                 className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Contact</NavLink>
                    </li>
                </ul>

            </div>
            <div className={styles.wrapperContainer}>
                <Routes>
                    {
                        Object.values(routeConfig).map(({element, path}) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }

                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default MenuSideBar;
