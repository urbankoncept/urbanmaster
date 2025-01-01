import React from "react";
import style from '../page.module.css';
import Image from "next/image";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const Header = ({ activeSection, onSectionClick }) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                logo
            </div>
            <div className={style.sections}>
                <div className={activeSection === 'home' ? style.active : ''} onClick={() => onSectionClick('videoContent')}>
                    Home
                </div>
                <div className={activeSection === 'about' ? style.active : ''} onClick={() => onSectionClick('container')}>
                    About Us
                </div>
                <div className={activeSection === 'services' ? style.active : ''} onClick={() => onSectionClick('services')}>
                    Services
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Clients
                </div>
                <div>
                    Contact Us
                </div>
            </div>
            <div className={style.mailer}>
                <Image src={`${publicRuntimeConfig.basePath}/mail.png`}  style={{ height: '60%', width: '60%' }} alt="Mail" />
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            </div>
        </div>
    );
}
export default Header;