import React from 'react';

function Contacts() {
  return (
    <section className="contact contact__main">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <div className="contact__heading heading">
              <p className="heading__subtitle">Contact info</p>
              <h2 className="heading__title">Get in touch</h2>
            </div>

            <ul className="contact__contacts">
              <li className="contact__contacts-item">
                <img
                  src={require('../assets/png/icons/Chat.svg').default}
                  alt=""
                  className="contacts-image"></img>
                <div className="contact__contacts-text">
                  <p className="contact__contacts-subtitle">Talk to us:</p>
                  <h2 className="contact__contacts-title">hello@createx.com</h2>
                </div>
              </li>
              <li className="contact__contacts-item">
                <img
                  src={require('../assets/png/icons/iPhone.svg').default}
                  alt=""
                  className="contacts-image"></img>
                <div className="contact__contacts-text">
                  <p className="contact__contacts-subtitle">Call us:</p>
                  <h2 className="contact__contacts-title">(405) 555-0128</h2>
                </div>
              </li>
              <li className="contact__contacts-item">
                <img
                  src={require('../assets/png/icons/outline.svg').default}
                  alt=""
                  className="contacts-image"></img>
                <div className="contact__contacts-text">
                  <p className="contact__contacts-subtitle">Address:</p>
                  <h2 className="contact__contacts-title">
                    2464 Royal Ln. Mesa, New Jersey 45463, USA
                  </h2>
                </div>
              </li>
            </ul>

            <div className="contact__socials">
              <p className="contact__socials-text">Follow us:</p>

              <ul className="contact__socials-items">
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/Facebook.svg').default} alt=""></img>
                  </a>
                </li>
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/Twitter.svg').default} alt=""></img>
                  </a>
                </li>
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/YouTube.svg').default} alt=""></img>
                  </a>
                </li>
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/telegram.svg').default} alt=""></img>
                  </a>
                </li>
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/Instagram.svg').default} alt=""></img>
                  </a>
                </li>
                <li className="contact__socials-item">
                  <a href="#" className="contact__socials-link">
                    <img src={require('../assets/png/icons/Linked-In.svg').default} alt=""></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A497bed6c49273af743e67db678c2a64a7775f420b1361b122007e81162f48b0f&amp;source=constructor"
              width="705"
              height="412"
              frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
