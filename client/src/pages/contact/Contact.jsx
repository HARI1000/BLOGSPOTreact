import React, {useEffect,useState} from 'react';

import './contact.css'
function Contact() {
    const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Contact Us</h1>
        <h2 className="Parallax__content__heading__caption">
          The most interactive and userFriendly blog site
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>Phone</b>XXXXXXXXXX
        </p>
        <p>
          <b>Email</b>X@gmail.com
        </p>
        <p>
          <b>Github.</b>Play with this code yourself!
        </p>
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}
export default Contact