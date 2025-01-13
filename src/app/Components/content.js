import React from "react";
import Image from "next/image";
import getConfig from 'next/config';
import style from '../page.module.css';

const { publicRuntimeConfig } = getConfig();

const Content = ({ img, heading, para }) => {
    return (
        <div className={style.aboutContent}>
            <Image src={`${publicRuntimeConfig.basePath}${img}`} className={`${style.full} ${style.zoom}`} alt="Banner" />
            <div className={style.about}>
                <div className={`${style.aboutParagraph} ${style.aboutContentLook} aboutParagraph`}>
                    <h5 style={{ fontSize: '70px'}}>{heading}</h5>
                    {/* <h6>{para}</h6> */}
                    <h6 dangerouslySetInnerHTML={{ __html: para }} />
                </div>
            </div>
        </div>
    )
}
export default Content;