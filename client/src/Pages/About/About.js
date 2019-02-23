import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Media from 'react-media'

export default class About extends Component {
  render() {
    return (
      <div id="container" className="container py-5 px-md-5 bg-light">
        <div className="conainter">
          <div className="card about__dark-red-shadow my-4">
            <div className="card-body text-center">
              <h3 className="card-title about__dark-red about__dark-red">
                How does this manual help create mindset change?
              </h3>
              <p className="card-text">
                Well...One of the impactful principles in this manual tells
                exactly how to get the most out of the information contained in
                it.
              </p>
              <p className="card-text">
                It states that{' '}
                <span className="font-italic text-muted">
                  "Thoughts, positive or negative, grow stronger when fertilized
                  with constant repitition."
                </span>
              </p>
              <p className="card-text">
                So I got started...I started{' '}
                <span className="font-italic">"fertilizing"</span> my mind with
                the positive principles, concepts and philosophies that I had
                collected and gathered in my manual. I thought on these things
                during tough, uncertain times and good times as well. And you
                know what?
              </p>
            </div>
          </div>

          <div className="card about__dark-red-shadow my-5">
            <div className="card-body text-center ">
              <h3 className="card-title about__dark-red">
                Weak minded follower...to Disciplined champion fighter
              </h3>

              <p className="card-text">
                I got into martial arts and became a champion fighter with 50(+)
                fights in Boxing, Kickboxing, Thai Boxing, Savate, San Shou,
                Bare Knuckle Karate, Brazilian Jui Jitsu and Extreme Fighting,
                and won numerous state, regional and U.S. titles.
              </p>
              <div className="container card-text carousel-width d-flex justify-content-center w-100">
                <Media query="(max-width: 480px)">
                  {matches =>
                    matches ? (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={100}
                      >
                        <div>
                          <img src="/images/fight/fight-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-4.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-5.jpg" alt="..." />
                        </div>
                      </Carousel>
                    ) : (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={33}
                      >
                        <div>
                          <img src="/images/fight/fight-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-4.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-5.jpg" alt="..." />
                        </div>
                      </Carousel>
                    )
                  }
                </Media>
              </div>
            </div>
          </div>

          <div className="card about__dark-red-shadow my-5">
            <div className="card-body text-center ">
              <h3 className="card-title about__dark-red">
                Construction laborer...to Business owner
              </h3>

              <p className="card-text">
                I went from a construction laborer (an important, demanding job
                I was proud of, but I wanted more) to a supervisor in
                manufacturing, to a manager in asset recovery. I built highly
                motivated, disciplined, loyal and profitable teams in each of
                these industries. My latest step was starting my own online
                business which I run in my spare time.
              </p>
              <div className="container card-text carousel-width d-flex justify-content-center w-100">
                <Media query="(max-width: 480px)">
                  {matches =>
                    matches ? (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={100}
                      >
                        <div>
                          <img src="/images/fight/fight-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-4.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-5.jpg" alt="..." />
                        </div>
                      </Carousel>
                    ) : (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={33}
                      >
                        <div>
                          <img src="/images/fight/fight-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-4.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fight/fight-pic-5.jpg" alt="..." />
                        </div>
                      </Carousel>
                    )
                  }
                </Media>
              </div>
            </div>
          </div>

          <div className="card about__dark-red-shadow my-5">
            <div className="card-body text-center ">
              <h3 className="card-title about__dark-red">
                Unhappy marriage/divorce...to Amazing, lasting relationship
              </h3>

              <p className="card-text">
                I went from an unhappy marriage and the financial/emotional
                challenges of a difficult divorce to finding an awesome and
                positive relationship with an amazing woman who I married and
                have had only happiness with from the beginning.
              </p>
              <div className="container card-text carousel-width d-flex justify-content-center w-100">
                <Media query="(max-width: 480px)">
                  {matches =>
                    matches ? (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={100}
                      >
                        <div>
                          <img src="/images/fam/fam-pic-1.JPG" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fam/fam-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fam/fam-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-4.jpg" alt="..." />
                        </div>
                      </Carousel>
                    ) : (
                      <Carousel
                        className="carousel-width w-100"
                        autoPlay
                        infiniteLoop
                        swipeable
                        stopOnHover
                        dynamicHeight
                        centerMode
                        showStatus={false}
                        interval={4000}
                        transitionTime={1000}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={33}
                      >
                        <div>
                          <img src="/images/fam/fam-pic-1.JPG" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fam/fam-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/fam/fam-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-1.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-2.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-3.jpg" alt="..." />
                        </div>
                        <div>
                          <img src="/images/wed/wed-pic-4.jpg" alt="..." />
                        </div>
                      </Carousel>
                    )
                  }
                </Media>
              </div>
            </div>
          </div>

          <div className="card about__dark-red-shadow my-4">
            <div className="card-body text-center">
              <p className="card-text">
                I embraced, concentrated on and implemented the principles of
                motivation, inspiration, discipline, leadership, determination
                and more, that are in the Impact Motivation Manual.
              </p>
              <p className="card-text">
                In doing this, I created a mindset change in myself, that
                enabled my accomplishments in sports, work/business and
                relationships.
              </p>
              <p className="card-text">
                Now I want to share this powerful tool with everyone and anyone
                who is looking for a positive change in their life or simply
                want to optimize what they're already doing.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// <img
// src="/images/imm-1.PNG"
// className="card-img"
// style={{ height: '100px', width: '100px' }}
// alt="..."
// />
// <div className="container mt-5 pt-4">
//   <div className="text-center mt-5 pt-4">
//     <h3 className="mb-5"></h3>
//     <p>

//     </p>
//     <p>
//       It states that "Thoughts, positive or negative, grow stronger when
//       fertilized with constant repitition."
//     </p>
//     <p>

//     </p>
//   </div>
// </div>
