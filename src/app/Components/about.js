import React from "react";
import Image from "next/image";
import getConfig from 'next/config';
import style from '../page.module.css';
const { publicRuntimeConfig } = getConfig();

const About = () => {
    return (
        <div className={`${style.aboutContent}`}>
            <Image src={`${publicRuntimeConfig.basePath}/maxresdefault.jpg`} className={`${style.full} ${style.zoom}`} alt="Banner" />
            <div className={style.about}>
                <div className={`${style.aboutParagraph} aboutParagraph`}>
                    <h5>We are:</h5>
                    <h6>Being Industrial Engineers, we started this journey around 2005 with knowledge and experience mixed with passion in design, we knew that we could create a seamless buying experience and enrich everyday home-living. With optimal project planning, scheduling, determined product specification, developed process flow and management control systems, enacted quality control and ensured maximum efficiency.</h6>
                </div>
                <div className={`${style.aboutImgs} ${style.aboutParagraph} aboutParagraph`}>
                    <div className={style.imgsContainer}>
                        <div className={style.imgSpan}><Image src={`${publicRuntimeConfig.basePath}/1.png`} className={style.imgss} alt="Renovation" /> Customized Design</div>
                        <div className={style.imgSpan}><Image src={`${publicRuntimeConfig.basePath}/2.png`} className={style.imgss} alt="Consultation" /> Guaranteed <br/>30 days delivery</div>
                    </div>
                    <div className={style.imgsContainer}>
                        <div className={style.imgSpan}><Image src={`${publicRuntimeConfig.basePath}/3.png`} className={style.imgss} alt="Renovation" /> Innovative Ideas</div>
                        <div className={style.imgSpan}><Image src={`${publicRuntimeConfig.basePath}/4.png`} className={style.imgss} alt="Consultation" /> Quality Adherence</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;