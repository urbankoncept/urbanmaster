import { useEffect, useState } from 'react';
import Header from "@/app/Components/Header";
import { Rubik } from 'next/font/google';
import style from '../app/page.module.css';
import '../app/globals.css';
import About from '@/app/Components/about';
import Services from '@/app/Components/services';
import Content from '@/app/Components/content';
import { TypeAnimation } from 'react-type-animation';

const roboto = Rubik({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll(`.${style.section}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains(style.videoWrapper)) {
              setActiveSection('home');
            } else if (entry.target.classList.contains(style.container)) {
              setActiveSection('about');
            } else if (entry.target.classList.contains(style.services)) {
              setActiveSection('services');
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleSectionClick = (section) => {
    const sectionElement = document.querySelector(`.${style[section]}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header activeSection={activeSection} onSectionClick={handleSectionClick} />
      <div className={style.content}>
        <section className={`${style.videoWrapper} ${style.section} videoWrapper`}>
          <div className={`${style.videoContent} videoContent`}>
            <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', fontFamily: 'auto', borderRadius: '10px', color: 'white', width: 'fit-content' }}>
              <h5 style={{ padding: '15px'}}>
                {`"The Best Rooms have life in them..."`} </h5>
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                sequence={[
                  'Your Designer search ends here!\nShare your dream space with us and we will make it real.',
                  // 1000,
                ]}
                className={style.type}
                speed={1}
                omitDeletionAnimation={true}
                style={{ fontSize: '30px', color: '#f8c905', display: 'block', fontWeight: 600, whiteSpace: 'pre-line', }}
              />
              {/* <h6>Your Designer search ends here! <br />
                Tell us how you want your dream space to be and we execute that</h6> */}
            </div>
          </div>
          <video src="https://tinttoneandshade.com/wp-content/uploads/TTS-web-vid.mp4" autoPlay loop muted />
        </section>
        <section className={`${style.container} ${style.section}`}>
          <About />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Services />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Living Room"
            para="Looking for inspiring living room interior design ideas?<br /> Discover fresh designs and ideas from our handpicked selection of wall Panelling and designs, modular TV units and hall designs. Create the perfect living space with us. " />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Bedroom Interiors"
            para="Looking for design ideas for your bedroom? <br />You’ve come to the right place!<br /> Our bedroom designs are a cut above the rest as we ensure the perfect combination of beauty and functionality. Check out these inspiring design ideas." />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Entertainment Unit"
            para="Well-designed unit for your TV, gadgets & memorabilia. Units with closed cabinets, open units, shelves, panelling etc" />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Wardrobe Design"
            para="Wardrobes are no more just a space to store your clothes in. They are now a statement in style and a focal point that enhances the aesthetics of your bedroom. And not just the bedroom, they can be customized for every room." />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Crockery Unit"
            para="Well-designed crockery units. With bottom cabinets for storage of cutlery, crockery, dinnerware, and wall cabinets to display your favourite crystal-ware" />
        </section>
        <section className={`${style.services} ${style.section}`}>
          <Content
            img="/liv.png"
            heading="Study Table"
            para="Be it an office table for yourself or a study table for your kids, we customize the unit for you" />
        </section>
      </div>
    </>
  );
}
