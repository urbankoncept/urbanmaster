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
                    para="Among other areas, the kitchen is usually appraised and given a lot of importance. Urban Koncepts maintains efficiency with the optimal work triangle. We also look into the modern kitchen requirements with added functions of dining, entertaining and laundry. The unique kitchen design makes each kitchen function easier and quicker! A perfect kitchen design will be a fine blend of creativity, functional know-how and technical understanding. Urban Koncept designs impeccable kitchens by providing optimal solutions based on the needs and desires of the kitchen user.
We detail each element in the kitchen design mapping your expectations, delivering a unique kitchen just for you.
Our kitchen interior designers understand each component that goes into your kitchen. They will give you options to choose from in terms of your priorities viz-a-viz functionality, aesthetics, accessories, storage, budget etc. Customer focus, design excellence and quality assurance are our mantras.
Our kitchen designers have in-depth knowledge and expertise of various finishes available to make your kitchen look fabulous! Classic or Contemporary, Matt or Gloss, Wood or Wood-like, Profile or Handle-less; you name it, we have it all! Our kitchen design incorporates elements to match with the overall design concept of your Home.
" />
            </div>
        </>

    );
}
export default Services;