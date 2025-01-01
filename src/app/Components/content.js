import React from "react";
import style from '../page.module.css';
import Image from "next/image";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const Content = ({ img, heading, para }) => {
    return (
        <div className={style.aboutContent}>
            <Image src={`${publicRuntimeConfig.basePath}${img}`} className={`${style.full} ${style.zoom}`} alt="Banner"></img>
            <div className={style.about}>
                <div className={`${style.aboutParagraph} aboutParagraph`}>
                    <h5>{heading}</h5>
                    <h6>{para}</h6>
                </div>
            </div>
        </div>
    )
}
export default Content;