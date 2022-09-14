import React from 'react';

import podcast2 from '../assets/png/podcastsimages/image-2.jpg';
import podcast1 from '../assets/png/podcastsimages/image-1.jpg';
import podcast from '../assets/png/podcastsimages/image.jpg';
import mic from '../assets/png/icons/blog/mic.svg';
import play from '../assets/png/icons/blog/Play.svg';
import files from '../assets/png/icons/blog/Files.svg';

function Blog() {
  return (
    <section className="blog blog__main">
      <div className="container">
        <div className="blog__inner">
          <div className="blog__heading heading">
            <div className="blog__heading-text">
              <div className="heading__subtitle">Our blog</div>
              <div className="heading__title">Latest posts</div>
            </div>
            <button className="button">Go to blog</button>
          </div>

          <div className="blog__grid">
            <div className="blog__grid-item">
              <div className="blog__image">
                <img src={podcast2} alt=""></img>
                <div className="blog__type">
                  <img src={mic} alt="" className="blog__type-img"></img>
                  <div className="blog__type-text">Podcast</div>
                </div>
              </div>
              <div className="blog__info">
                <div className="blog__category">
                  <div className="blog__category-type blog__category-ell">Marketing</div>
                  <div className="blog__category-date blog__category-ell">September 4, 2020</div>
                  <div className="blog__category-time blog__category-ell">36 min</div>
                </div>
                <div className="blog__title">
                  What is traffic arbitrage and does it really make money?
                </div>
                <div className="blog__text">
                  Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin
                  dignissim lacus, purus gravida...
                </div>
                <div className="blog__button">Listen</div>
              </div>
            </div>

            <div className="blog__grid-item">
              <div className="blog__image">
                <img src={podcast1} alt=""></img>
                <div className="blog__type">
                  <img src={play} alt="" className="blog__type-img"></img>
                  <div className="blog__type-text">Video</div>
                </div>
              </div>
              <div className="blog__info">
                <div className="blog__category">
                  <div className="blog__category-type blog__category-ell">Managment</div>
                  <div className="blog__category-date blog__category-ell">August 25, 2020</div>
                  <div className="blog__category-time blog__category-ell">45 min</div>
                </div>
                <div className="blog__title">
                  What to do and who to talk to if you want to get feedback on the product
                </div>
                <div className="blog__text">
                  Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna
                  sagittis faucibus...
                </div>
                <div className="blog__button">Watch</div>
              </div>
            </div>

            <div className="blog__grid-item">
              <div className="blog__image">
                <img src={podcast} alt=""></img>
                <div className="blog__type">
                  <img src={files} alt="" className="blog__type-img"></img>
                  <div className="blog__type-text">Article</div>
                </div>
              </div>
              <div className="blog__info">
                <div className="blog__category">
                  <div className="blog__category-type blog__category-ell">Design</div>
                  <div className="blog__category-date blog__category-ell">August 8, 2020</div>
                </div>
                <div className="blog__title">
                  Should you choose a creative profession if you are attracted to creativity?
                </div>
                <div className="blog__text">
                  Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra
                  sed vulputate ultrices...
                </div>
                <div className="blog__button">Read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
