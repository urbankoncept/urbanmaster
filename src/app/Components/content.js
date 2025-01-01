import React from "react";
import style from '../page.module.css';

const Content = ({ img, heading, para }) => {
    return (
        <div className={style.aboutContent}>
            <img src={img} className={`${style.full} ${style.zoom}`} alt="Banner"></img>
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