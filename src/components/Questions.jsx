import React from 'react';

function Questions() {
  return (
    <section className="questions questions__main">
      <div className="container">
        <div className="questions__inner">
          <img
            src={require('../assets/png/svgillustr/illustration-questions.svg').default}
            alt=""
            className="questions__image"></img>

          <div className="questions__content">
            <div className="questions__heading heading">
              <div className="heading__subtitle">Any questions?</div>
              <div className="heading__title">Drop us a line</div>
            </div>

            <form className="questions__form">
              <div className="questions__form-row">
                <label className="questions__form-label">
                  First Name*
                  <input
                    type="text"
                    className="questions__form-input"
                    placeholder="Your first name"
                    required></input>
                </label>
                <label className="questions__form-label">
                  Last Name*
                  <input
                    type="text"
                    className="questions__form-input"
                    placeholder="Your last name"
                    required></input>
                </label>
              </div>
              <div className="questions__form-row">
                <label className="questions__form-label">
                  Email*
                  <input
                    type="email"
                    className="questions__form-input"
                    placeholder="Your working email"
                    required></input>
                </label>
                <label className="questions__form-label">
                  Phone
                  <input
                    type="tel"
                    className="questions__form-input"
                    placeholder="Your phone number"></input>
                </label>
              </div>
              <label className="questions__text-label">
                Message*
                <textarea
                  className="questions__form-text"
                  placeholder="Your message"
                  required></textarea>
              </label>
              <div className="questions__form-row">
                <label className="questions__checkbox-label">
                  <div className="questions__form-checkbox">
                    <input className="questions__form-default" type="checkbox" required></input>
                    <span className="questions__form-custom"></span>
                  </div>
                  I agree to receive communications from Createx Online School
                </label>
                <button type="submit" className="questions__form-btn button">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
