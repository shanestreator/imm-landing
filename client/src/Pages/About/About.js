import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Media from 'react-media'

export default class About extends Component {
  render() {
    return (
      <div
        id="container"
        className="container about__container-shadow py-5 px-md-5 bg-light"
      >
        <div className="container-md px-md-4">
          <div className="conainter">
            <h1 className="display-4 text-center">About</h1>

            <div className="card bg-light my-4" style={{ border: 'none' }}>
              <div className="card-body text-center">
                <h3 className="card-title about__dark-red">
                  How does this manual help create mindset change?
                </h3>
                <p className="card-text text-left pb-2">
                  Well...One of the impactful principles in this manual tells
                  exactly how to get the most out of the information contained
                  in it.
                </p>
                <p className="card-text py-2">
                  It states that{' '}
                  <span className="font-italic text-muted">
                    "Thoughts, positive or negative, grow stronger when
                    fertilized with constant repitition."
                  </span>
                </p>
                <p className="card-text text-right pt-2">
                  So I got started...I started{' '}
                  <span className="font-italic">"fertilizing"</span> my mind
                  with the positive principles, concepts and philosophies that I
                  had collected and gathered in my manual. I thought on these
                  things during tough, uncertain times and good times as well.
                  And you know what?
                </p>
              </div>
            </div>

            <hr className="my-5" />

            <div className="mt-5 card bg-light" style={{ border: 'none' }}>
              <div className="card-body">
                <h4 className="mb-0 text-center font-weight-normal">
                  It worked...It made a difference...It changed my life HERE'S
                  HOW:
                </h4>
              </div>
            </div>

            <hr className="my-5" />

            <div className="card bg-light my-5" style={{ border: 'none' }}>
              <div className="card-body text-center ">
                <h3 className="card-title about__dark-red">
                  Weak minded follower...to Disciplined champion fighter
                </h3>

                <p className="card-text">
                  I got into martial arts and became a champion fighter with
                  50(+) fights in Boxing, Kickboxing, Thai Boxing, Savate, San
                  Shou, Bare Knuckle Karate, Brazilian Jui Jitsu and Extreme
                  Fighting, and won numerous state, regional and U.S. titles.
                </p>
                <div className="container card-text carousel-width d-flex justify-content-center w-100">
                  <Media query="(max-width: 480px)">
                    {matches =>
                      matches ? (
                        <Carousel
                          className="carousel-width w-100"
                          autoPlay
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
                            <img
                              src="/images/fight/fight-pic-1.png"
                              alt="..."
                            />
                          </div>
                          <div>
                            <img
                              src="/images/fight/fight-pic-2.png"
                              alt="..."
                            />
                          </div>
                          <div>
                            <img
                              src="/images/fight/fight-pic-3.png"
                              alt="..."
                            />
                          </div>
                          <div>
                            <img
                              src="/images/fight/fight-pic-4.png"
                              alt="..."
                            />
                          </div>
                          <div>
                            <img
                              src="/images/fight/fight-pic-5.png"
                              alt="..."
                            />
                          </div>
                        </Carousel>
                      ) : (
                        <Carousel
                          className="carousel-width w-100"
                          autoPlay
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
                          centerSlidePercentage={34}
                        >
                          <div>
                            <img
                              src="/images/fight/fight-pic-1.png"
                              alt="..."
                            />
                          </div>

                          <div>
                            <img
                              src="/images/fight/fight-pic-3.png"
                              alt="..."
                            />
                          </div>

                          <div>
                            <img
                              src="/images/fight/fight-pic-2.png"
                              alt="..."
                            />
                          </div>

                          <div>
                            <img
                              src="/images/fight/fight-pic-4.png"
                              alt="..."
                            />
                          </div>
                          <div>
                            <img
                              src="/images/fight/fight-pic-5.png"
                              alt="..."
                            />
                          </div>
                        </Carousel>
                      )
                    }
                  </Media>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <div className="card bg-light my-5" style={{ border: 'none' }}>
              <div className="card-body text-center ">
                <h3 className="card-title about__dark-red">
                  Construction laborer...to Business owner
                </h3>

                <p className="card-text">
                  I went from a construction laborer (an important, demanding
                  job I was proud of, but I wanted more) to a supervisor in
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
                            <img
                              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80"
                              alt="..."
                              className="img-fluid h-100"
                            />
                          </div>
                          <div>
                            <img
                              src="https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                              alt="..."
                              className="img-fluid h-100"
                            />
                          </div>
                        </Carousel>
                      ) : (
                        <Carousel
                          className="carousel-width w-100"
                          autoPlay
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
                          centerSlidePercentage={34}
                        >
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80"
                              alt="..."
                              className="img-fluid h-100"
                            />
                          </div>
                          <div>
                            <img
                              src="https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                              alt="..."
                              className="img-fluid h-100"
                            />
                          </div>
                        </Carousel>
                      )
                    }
                  </Media>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <div className="card bg-light my-5" style={{ border: 'none' }}>
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
                            <img src="/images/wed/wed-pic-1.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-2.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-3.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-4.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-5.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-6.png" alt="..." />
                          </div>
                        </Carousel>
                      ) : (
                        <Carousel
                          className="carousel-width w-100"
                          autoPlay
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
                          centerSlidePercentage={34}
                        >
                          <div>
                            <img src="/images/wed/wed-pic-1.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-2.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-3.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-4.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-5.png" alt="..." />
                          </div>
                          <div>
                            <img src="/images/wed/wed-pic-6.png" alt="..." />
                          </div>
                        </Carousel>
                      )
                    }
                  </Media>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <h1 className="display-4 text-center">Mission</h1>

            <div className="card bg-light mt-4 mb-5" style={{ border: 'none' }}>
              <div className="card-body text-center">
                <p className="card-text pb-2 text-left">
                  I embraced, concentrated on and implemented the principles of
                  motivation, inspiration, discipline, leadership, determination
                  and more, that are in the Impact Motivation Manual.
                </p>
                <p className="card-text py-2 text-center">
                  It created a mindset change in myself, that enabled my
                  accomplishments in sports, work/business and relationships.
                </p>
                <p className="card-text pt-2 text-right">
                  Now I want to share this powerful tool with everyone and
                  anyone who is looking for a positive change in their life or
                  simply want to optimize what they're already doing.
                </p>
              </div>
            </div>

            <hr className="my-5" />

            <div className="text-center pt-5 mt-5">
              <h3 className="card-title about__dark-red">
                "
                <span className="text-muted font-italic">
                  Don't wait, the time will never be just right.
                </span>
                "
                <p>
                  <span className="text-muted" style={{ fontSize: '14px' }}>
                    - Napoleon Hill
                  </span>
                </p>
              </h3>
            </div>

            <div className="d-flex justify-content-center">
              <Link to="/store">
                <img
                  className="mt-5 px-5 px-md-0 img-fluid"
                  src="/images/Paypal-Buy-Now-Button.png"
                  alt=""
                />
              </Link>
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
