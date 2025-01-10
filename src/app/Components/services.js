import React from "react";
import style from '../page.module.css';
import Content from "./content";

const Services = () => {
    return (
        <>
            <div className={style.services}>
                <Content
                    img="/kit.png"
                    heading="Modular Kitchen"
                    para="Urban Koncepts maintains efficiency with the optimal work triangle. 
                    The unique kitchen design makes each kitchen function easier and quicker! A perfect kitchen design will be a fine blend of creativity, functional know-how and technical understanding.
<br /><br />We detail each element in the kitchen design mapping your expectations, delivering a unique kitchen just for you. <br /><br />
We have in-depth knowledge and expertise of various finishes available to make your kitchen look fabulous! Classic or Contemporary, Matt or Gloss, Wood or Wood-like, Profile or Handle-less; you name it, we have it all! Our kitchen design incorporates elements to match with the overall design concept of your Home.
" />
            </div>
        </>

    );
}
export default Services;